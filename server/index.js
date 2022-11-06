const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const cors = require('cors')
const coins = require('./routes/CoinRoutes')

const PORT = process.env.PORT || 5000

app.use(cors())
app.use('/api/coins', coins)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})