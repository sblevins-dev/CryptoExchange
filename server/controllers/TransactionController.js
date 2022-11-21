const express = require('express')
const Transaction = require("../models/TransactionModel")

const getTransactions = async (req, res) => {
    const transactions = await Transaction.find({userID: req.params.id})

    if (!transactions) {
        res.status(400).json({
            message: "Error getting transactions"
        })
    } else {
        res.status(200).send(transactions)
    }
}

// userID: user.id,
// coinID: coin.id,
// currentPrice: coin.current_price,
// amount: 0,
// total: 0.0,
const makeTransaction = async (req, res) => {
    const { userID, coinID, currentPrice, amount, total } = req.body;

    if (!userID || !coinID || !currentPrice || !amount || !total) {
        res.status(400).json({
            message: "Something went wrong, missing information"
        })
    } else {
        const transaction = Transaction.create({
            userID,
            coinID,
            currentPrice,
            amount,
            total
        })

        if (transaction) {
            res.status(201).json({
                message: "Coin Purchased!"
            })
        } else {
            res.status(400).json({
                message: "Something went wrong purchasing coin."
            })
        }
    }
}

module.exports = {
    getTransactions,
    makeTransaction
}