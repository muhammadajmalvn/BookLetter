const genreSchema = require('../../models/Genres/genreSchema')

exports.addgenre = async (req, res) => {
    const name = req.body.genre;
    try {
        genreSchema.find({ name: name }).then((genre) => {
            if (genre.length > 0) {
                console.log('Genre already exists');
                res.status(500).json("Genre Already Exists")
            } else {
                genreSchema.create({ name }).then((result) => {
                    res.status(201).json(result)
                }).catch((err) => {
                    res.status(400)
                })
            }
        })
    }
    catch (error) {
        console.log(err);
        res.status(500).json(error.message)
    }
};

exports.getAllGenres = async (req, res) => {
    try {
        genreSchema.find().then((data) => {
            res.status(200).json(data)
        })
    }
    catch (error) {
        res.status(500).json(error)
    }
}


exports.deleteGenre = async (req, res) => {
    try {
        await genreSchema.deleteOne({ _id: req.query.id })
        const data = await genreSchema.find()
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json('Internal Server Error')
    }
}