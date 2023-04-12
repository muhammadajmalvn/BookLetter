const mongoose = require('mongoose');

const genreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
});

const model = mongoose.model('Genre', genreSchema);

module.exports = model;
