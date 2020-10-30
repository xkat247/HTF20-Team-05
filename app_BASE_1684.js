const express = require("express")
const mongoose = require("mongoose")
const connectDB = require('./config/db')
const path = require('path')
const PORT = process.env.PORT || 5000
const app = express()

dotenv.config({
    path: path.join(__dirname, '/config/config.env')
  })


connectDB()


//middlewares
app.use(express.json())

//routes
//app.use('/', require('./routes/index'))



app.listen(PORT, console.log(`server running on port ${PORT}`))
