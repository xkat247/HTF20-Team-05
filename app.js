const express = require("express")
const mongoose = require("mongoose")
const session = require('express-session');
const bodyParser = require("body-parser");
const connectDB = require('./config/db')
const passport = require("passport")
const path = require('path')
const pug = require('pug');
const MongoStore = require('connect-mongo')(session)
const dotenv = require("dotenv")
const PORT = process.env.PORT || 5000
const app = express()



dotenv.config({
  path: path.join(__dirname, '/config/config.env')
})


connectDB()


require('./config/passport')(passport)



//middlewares
app.use(express.urlencoded({
  extended: false
}))
app.use(express.json())
app.use(bodyParser.json());

app.set('view engine', 'pug')
app.set('views', './views')


app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: 'SECRET',
  store: new MongoStore({
    mongooseConnection: mongoose.connection
  }) 
}));


app.use(passport.initialize())
app.use(passport.session())

app.use(express.static(path.join(__dirname, 'public')))



//routes
app.use('/', require('./routes/index'))
app.use('/auth',require('./routes/auth'))
app.use('/api/events', require('./routes/events'));
app.use('/api/items', require('./routes/items'));
app.use('/api/lostfound', require('./routes/lostfound'));
app.use('/api/admin', require('./routes/admin'));



app.listen(PORT, console.log(`server running on port ${PORT}`))
