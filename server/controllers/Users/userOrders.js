const orderSchema = require('../../models/Bookings/OrderSchema')
const bookSchema = require('../../models/Books/bookSchema')
const userSchema = require('../../models/Users/userSchema')
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
                }, {
                    $sort: {
                        createdAt: -1
                    }
                }
            ]

        )
        console.log(bookOrders, 'orderssss');
        res.status(200).json(bookOrders)
    } catch (error) {
        res.status(400).json("error while getting data from the orders")
        throw error;

    }
}

exports.returnOrder = async (req, res) => {
    try {
        await orderSchema.updateOne({ _id: req.body.orderId }
            , { $set: { status: 'returned' } })
        res.status(200).json('Updated order status')
    } catch (e) {
        res.status(500).json("Error updating")
    }
}

exports.addAddress = async (req, res) => {
    try {
        const { addressLine1, addressLine2, postcode, state, phoneNumber } = req.body.address;
        let address = {
            addressLine1: addressLine1,
            addressLine2: addressLine2,
            postcode: postcode,
            state: state,
            phoneNumber: phoneNumber
        }
        await userSchema.updateOne({ _id: req.query.id }, { $push: { address: address } })
        // const data = await userSchema.aggregate([
        //     { $match: { _id: req.query.id } },
        // ])
        res.status(200).json('added')
    } catch (error) {
        res.status(400).json("Error adding address")
    }
}

exports.getAddress = async (req, res) => {
    try {
        console.log(req.query.id);
        const userId = new mongoose.Types.ObjectId(req.query.id);
        const data = await userSchema.aggregate([

            {
                '$match': {
                    '_id': userId
                }
            }, {
                $unwind: {
                    path: '$address',

                }
            }, {
                '$project': {
                    '_id': 0,
                    'address': 1
                }
            }, {
                '$replaceRoot': {
                    'newRoot': '$address'
                }
            }

        ])
        console.log(data);
        res.status(200).json(data)
    } catch (e) {
        res.status(500).json("Error getting address")
    }
}
