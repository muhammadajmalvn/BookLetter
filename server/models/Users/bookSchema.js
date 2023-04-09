const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  publisher: {
    type: String,
    required: true
  },
  publishedDate: {
    type: Date,
    required: true,
    get: function(value) {
      return value.toLocaleDateString();
    }
  },
  genre: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  pages: {
    type: Number,
    required: true
  },
  photo:[],
  copies: [
    {
      id: {
        type: String,
        // unique: true
      },
      available: {
        type: Boolean,
        default: true
      }
    }
  ]
});

const model = mongoose.model('Book', bookSchema);

module.exports = model;
