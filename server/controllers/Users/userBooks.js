const bookSchema = require('../../models/Books/bookSchema')
const generateToken = require('../../utils/generateToken')



exports.getAllBooks = async (req, res) => {
    try {
        bookSchema.find().then((data) => {
            res.status(200).json(data)
        })
    }
    catch (error) {
        console.log(err, 'Error in fetching books');
        res.status(500).json(err)
    }
}