const mongoose = require('mongoose');

const sellRequestSchema = new mongoose.Schema({
    title: {
        type: 'String',
        required: true
    },
    author: {
        type: 'String',
        required: true
    }, genre: {
        type: 'String',
        required: true
    }, publisher: {
        type: 'String',
        required: true
    }, publishedDate: {
        type: Date,
        required: true,
        get: function (value) {
            return value.toLocaleDateString();
        }
    }, damage: {
        type: String,
        required: true
    },
    askingPrice: {
        type: Number,
        required: true
    },
    pages: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        default: 'pending'
    }, statusHistory: {
        type: [{
            status: {
                type: String,
                default: 'placed'
            },
            date: {
                type: Date,
                default: Date.now
            }
        }],
        default: [{
            status: 'placed',
            date: Date.now()
        }]
    },
    photo: [],
}, {
    timestamps: true
})



const model = mongoose.model('sellRequests', sellRequestSchema)
module.exports = model