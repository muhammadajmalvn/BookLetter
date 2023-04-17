const orderSchema = require('../../models/Bookings/OrderSchema')
const bookSchema = require('../../models/Books/bookSchema')
const dotenv = require('dotenv')
dotenv.config()
const Stripe = require("stripe")
const stripe = Stripe(process.env.STRIPE_SECRET_KEY)

exports.booking = async (req, res) => {
    console.log(req.body.bookingData);
    const { userId, bookId, bookDetails, totalAmount, totalDays, address, bookedTimePeriod } = req.body.bookingData
    if (bookDetails.quantity >= 1) {
        const session = await stripe.checkout.sessions.create({
            line_items: [
                {
                    price_data: {
                        currency: 'inr',
                        product_data: {
                            title: bookDetails.title,
                            images: [bookDetails.photo[0]],
                            description: bookDetails.description,
                            metadata: {
                                book_id: bookId,
                                totalDays: totalDays,
                                startDate: bookedTimePeriod.startDate,
                                endDate: bookedTimePeriod.endDate
                            }
                        }, unit_amount: totalAmount * 100,
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: 'http://localhost:3000/ordered-book',
            cancel_url: 'http://localhost:4242/cancel',
        })
        const order = new orderSchema({
            userId: userId,
            bookId: bookId,
            totalAmount: totalAmount,
            totalDays: totalDays,
            bookedTimePeriod: bookedTimePeriod,
            address: address,
            stripeSessionId: session.id, // store the session id for future reference
        });
    }
}