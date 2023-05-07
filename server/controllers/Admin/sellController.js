const sellRequestSchema = require('../../models/SellRequests/sellRequests')

exports.getSellRequests = async (req, res) => {
    try {
        const data = await sellRequestSchema.find()
        res.status(200).json(data)
    } catch (error) {
        res.status(400).json('error getting sell request')
    }
}


exports.changeStatus = async (req, res) => {
    try {
        await sellRequestSchema.updateOne({ _id: req.body.orderId }
            , {
                $set: { status: req.body.status },
                $push: {
                    statusHistory: {
                        status: req.body.status,
                        date: new Date()
                    }
                }
            })
        if (req.body.status === 'received') {

        }
        res.status(200).json('Updated order status')
    } catch (e) {
        res.status(500).json("Error updating")
    }
}
