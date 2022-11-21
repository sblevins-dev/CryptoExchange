const express = require('express')
const router = express.Router()
const { getTransactions, makeTransaction } = require('../controllers/TransactionController')
const { protect } = require("../middleware/authMiddleware")

router.get('/', protect, getTransactions)
router.post('/buy', protect, makeTransaction)

module.exports = router