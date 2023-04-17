const orderSchema = require('../../models/Bookings/OrderSchema')
const bookSchema = require('../../models/Books/bookSchema')


exports.getOrders = async (req, res) => {
    try {
        const userId = req.query.id;
        const orders = await orderSchema
            .aggregate(
                [{
                    $match: {
                        userId: userId,
                    }
                }, {
                    $lookup: {
                        from: 'books',
                        localField: 'bookId',
                        foreignField: '_id',
                        as: 'bookData'
                    }
                },
                {
                    $project: {
                        bookingId: '$_id',
                        status: 1,
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
                        rentPerHour: {
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
                        rentPerHour: 1,
                        address: 1,
                        totalAmount: 1,
                        totalDays: 1,
                        bookedTimePeriod: 1,
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
        console.log(orders, 'orderssss');
        res.status(200).json(orders)
    } catch (error) {
        res.json(400).json("error while getting data from the orders")

    }
}