const express = require('express')
const router = express.Router()
const { getCoins } = require('../controllers/CoinController')

router.get('/', getCoins)

module.exports = router