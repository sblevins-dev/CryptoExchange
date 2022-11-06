const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const cors = require('cors')
const coins = require('./routes/CoinRoutes')
const user = require('./routes/UserRoutes')

connectDB();

const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/coins', coins)
app.use('/api/user', user)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})