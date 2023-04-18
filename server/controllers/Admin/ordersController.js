const orderSchema = require('../../models/Bookings/OrderSchema')
const bookSchema = require('../../models/Books/bookSchema')

exports.getAllOrders = async (req, res) => {
    try {
        const bookOrders = await orderSchema
            .aggregate(
                [
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
        res.status(200).json(bookOrders)
    } catch (error) {
        res.status(400).json("error while getting data from the orders")
        throw error;

    }
}

exports.changeOrderStatus = async (req, res) => {
    try {
        await orderSchema.updateOne({ _id: req.body.orderId }
            , { $set: { status: req.body.status } })
        res.status(200).json('Updated order status')
    } catch (e) {
        res.status(500).json("Error updating")
    }
}