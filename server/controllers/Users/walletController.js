const walletSchema = require('../../models/Wallet/walletSchema')


exports.getWalletController = (req, res) => {
    try {
        walletSchema.findOne({ userId: req.query.id }).then((data) => {
            res.status(200).json(data)
        })
    } catch (error) {
        res.status(400).json("error while fetching wallet")
    }
}