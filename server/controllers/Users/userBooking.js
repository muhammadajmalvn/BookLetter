const orderSchema = require('../../models/Bookings/OrderSchema')
const bookSchema = require('../../models/Books/bookSchema')
const dotenv = require('dotenv')
dotenv.config()
const Stripe = require("stripe")
const stripe = Stripe(process.env.STRIPE_SECRET_KEY)

exports.booking = async (req, res) => {
    let { userName, userId, bookId, bookData, totalAmount, totalDays, address, bookedTimePeriod } = req.body.bookingData

    const [day1, month1, year1] = bookedTimePeriod.startDate.split(" ");
    const date1 = new Date(`${year1}-${month1}-${day1}`);
    bookedTimePeriod.startDate = new Date(date1.toISOString());

    const [day2, month2, year2] = bookedTimePeriod.endDate.split(" ");
    const date2 = new Date(`${year2}-${month2}-${day2}`);
    bookedTimePeriod.endDate = new Date(date2.toISOString());

    if (bookData.quantity > 0) {
        const session = await stripe.checkout.sessions.create({
            line_items: [
                {
                    price_data: {
                        currency: 'inr',
                        product_data: {
                            name: bookData.title,
                            images: [bookData.photo[0]],
                            description: bookData.description,
                            metadata: {
                                book_id: bookId,
                                totalDays: totalDays,
                                startDate: bookedTimePeriod.startDate,
                                endDate: bookedTimePeriod.endDate
                            }
                        },
                        unit_amount: totalAmount * 100,
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: 'http://localhost:3000/ordered-book',
            cancel_url: 'http://localhost:4242/cancel',
        })



        const available = await bookSchema.findOne(
            { _id: bookId },
            { copies: { $elemMatch: { available: true } } }
        );
        const copyId = available.copies[0]._id

        const order = new orderSchema({
            userId: userId,
            bookId: bookId,
            totalAmount: totalAmount,
            copyId: copyId,
            totalDays: totalDays,
            bookedTimePeriod: bookedTimePeriod,
            address: address,
            stripeSessionId: session.id, // store the session id for future reference
        });
        try {
            await order.save();
            console.log('Booking saved successfully');


            await bookSchema.updateOne(
                { _id: bookId, "copies.id": copyId },
                { $set: { "copies.$.available": false } }
            );
            const book = await bookSchema.findOneAndUpdate({ _id: bookId }, { $inc: { quantity: -1 }, $push: { bookedTimePeriod: bookedTimePeriod } })

            if (!book.bookedTimePeriod) {
                book.bookedTimePeriod = [bookedTimePeriod];
                await book.save();
            }
            res.send({ url: session.url })
        } catch (err) {
            console.error(err);
            res.status(500).send('Server error');
        }
    } else {
        res.status(500).send('Book is not available in stock')
    }
}