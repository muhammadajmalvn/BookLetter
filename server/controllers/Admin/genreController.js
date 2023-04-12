const genreSchema = require('../../models/Genres/genreSchema')

exports.addgenre = async (req, res) => {
    const name = req.body.genre;
    try {
        genreSchema.find({ name: name }).then((genre) => {
            if (genre) {
                res.status(400).json("Genre Already Exists")
            } else {
                genreSchema.create({ name }).then((result) => {
                    res.status(200).json('Genre Added')
                })
            }
        })
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Failed to add genre' })
    }
};