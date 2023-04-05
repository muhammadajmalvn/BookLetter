const bookSchema = require('../../models/Users/bookSchema')
const path = require('path')
const upload = require("../../utils/multer")
const fs = require('fs')
const cloudinary = require('../../utils/cloudinary')
const { v4: uuidv4 } = require('uuid');


exports.addBook = async (req, res) => {

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

            const copies = {
                // id: uuidv4(),
                // available: true
            }

            let bookDetails = {
                title: req.body.title,
                author: req.body.author,
                publisher: req.body.publisher,
                price: req.body.price,
                assured: true,
                genre: req.body.genre,
                pages: req.body.pages,
                publishedDate: req.body.date,
                description: req.body.description,
                copies:copies,
                photo

            }
            console.log(bookDetails, 'hfhfhfffh');

            bookSchema.create(bookDetails).then((data) => {
                console.log('book data', data);
                res.status(200).json(data)
            })


        } else {
            res.status(405).json({
                error: `${req.method} method is not allowed`
            })
        }
    } catch (error) {
        console.log('cloudinary error occured', error);
    }
}