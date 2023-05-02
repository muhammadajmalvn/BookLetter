const sellRequestSchema = require('../../models/SellRequests/sellRequests')
const path = require('path')
const upload = require("../../utils/multer")
const fs = require('fs')
const cloudinary = require('../../utils/cloudinary')
const { title } = require('process')


exports.sellBook = async (req, res) => {
    try {
        const uploader = async (path) => await cloudinary.uploads(path, 'Images')
        if (req.method === 'POST') {
            const urls = []
            const files = req.files

            for (const file of files) {
                const { path } = file
                const newPath = await uploader(path)
                const url = newPath.url
                urls.push(url)
                fs.unlinkSync(path)
            }


            let photo = []

            for (let i = 0; i < urls.length; i++) {
                photo.push(urls[i])
            }
            let bookDetails = {
                title: req.body.title,
                author: req.body.author,
                publisher: req.body.publisher,
                askingPrice: req.body.askPrice,
                genre: req.body.genre,
                pages: req.body.pages,
                publishedDate: req.body.date,
                damage: req.body.damage,
                photo

            }
            console.log(bookDetails, 'hfhfhfffh');
            sellRequestSchema.create(bookDetails).then((data) => {
                console.log('book data', data);
                res.status(200).json(data)
            })
        } else {
            res.status(405).json({
                error: `${req.method} method is not allowed`
            })
        }
    } catch (error) {
        res.status(400).json('Error in sell request')
    }
}