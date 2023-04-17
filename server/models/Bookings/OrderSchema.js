const mongoose = require("mongoose")


const addressSchema = new mongoose.Schema({
    addressLine1: { type: String, required: true },
    addressLine2: { type: String, required: true },
    state: { type: String, required: true },
    postcode: { type: Number, required: true },
    phoneNumber: { type: Number, required: true }
});
const orderSchema = new mongoose.Schema({
    bookId: {
        type: mongoose.Schema.Types.ObjectId // Change the type to ObjectId
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId
    },
    bookedTimePeriod: {
        startDate: {
            type: String
        },
        endDate: {
            type: String
        }
    },
    address: {
        type: addressSchema
    },

    totalDays: {
        type: Number
    },
    totalAmount: {
        type: Number
    },
    stripeSessionId: {
        type: String
    },
    status: {
        type: String,
        default: 'placed',
    }
}, {
    timestamps: true
}
)

const model = mongoose.model("Order", orderSchema)

module.exports = model