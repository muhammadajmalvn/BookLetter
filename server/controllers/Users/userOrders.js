const orderSchema = require('../../models/Bookings/OrderSchema')
const bookSchema = require('../../models/Books/bookSchema')
const mongoose = require('mongoose');

exports.getOrders = async (req, res) => {
    try {
        const userId = new mongoose.Types.ObjectId(req.query.id);
        const bookOrders = await orderSchema.aggregate(
            [
                { $match: { userId: userId } },

                {
                    '$lookup': {
                        'from': 'books',
                        'localField': 'bookId',
                        'foreignField': '_id',
                        'as': 'bookData'
                    }
                },
                {
                    $project: {
                        bookingId: '$_id',
                        status: 1,
                        createdAt: 1,
                        updatedAt: 1,
                        title: {
                            $arrayElemAt: [
                                '$bookData.title',
                                0
                            ]
                        },
                        description: {
                            $arrayElemAt: [
                                '$bookData.description',
                                0
                            ]
                        },
                        rentPerDay: {
                            $arrayElemAt: [
                                '$bookData.price',
                                0
                            ]
                        },
                        photo: {
                            $arrayElemAt: [
                                '$bookData.photo',
                                0
                            ]
                        },
                        address: 1,
                        totalAmount: 1,
                        totalDays: 1,
                        bookedTimePeriod: 1
                    }
                }, {
                    $project: {
                        bookingId: 1,
                        status: 1,
                        title: 1,
                        description: 1,
                        rentPerDay: 1,
                        address: 1,
                        totalAmount: 1,
                        totalDays: 1,
                        bookedTimePeriod: 1,
                        createdAt: 1,
                        updatedAt: 1,
                        photo: {
                            $arrayElemAt: [
                                '$photo',
                                0
                            ]
                        }
                    }
                }
            ]

        )
        // console.log(bookOrders, 'orderssss');
        res.status(200).json(bookOrders)
    } catch (error) {
        res.status(400).json("error while getting data from the orders")
        throw error;

    }
}

exports.returnOrder =async(req,res)=>{
    console.log('hoooooooooooooooo');
    try {
        await orderSchema.updateOne({ _id: req.body.orderId }
            , { $set: { status: 'returned' } })
        res.status(200).json('Updated order status')
    } catch (e) {
        res.status(500).json("Error updating")
    }
}