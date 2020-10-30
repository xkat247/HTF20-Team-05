const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser");
const connectDB = require('./config/db')
const path = require('path')
const PORT = process.env.PORT || 5000
const dotenv = require("dotenv")
const app = express()

dotenv.config({
  path: path.join(__dirname, '/config/config.env')
})


connectDB()


//middlewares
app.use(express.json())
app.use(bodyParser.json());

//routes
//app.use('/', require('./routes/index'))
app.use('/api/events', require('./routes/events'));
app.use('/api/items', require('./routes/items'));
app.use('/api/lostfound', require('./routes/lostfound'));



app.listen(PORT, console.log(`server running on port ${PORT}`))
