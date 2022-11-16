const mongoose = require('mongoose')

const transactionSchema = new mongoose.Schema(
    {
        userID: {
            type: String,
            required: true,
        },
        coinID: {
            type: String,
            required: true,
        },
        currentPrice: {
            type: Number,
            required: true,
        },
        amount: {
            type: Number,
            required: true,
        },
        total: {
            type: Number,
            required: true,
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("Transaction", transactionSchema)