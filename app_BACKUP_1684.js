const express = require("express")
const mongoose = require("mongoose")
<<<<<<< HEAD
const session = require('express-session');
=======
const bodyParser = require("body-parser");
>>>>>>> 53a2dc62b3535a2f0b3b72e98b7a432232b89a65
const connectDB = require('./config/db')
const passport = require("passport")
const path = require('path')
const MongoStore = require('connect-mongo')(session)
const dotenv = require("dotenv")
const PORT = process.env.PORT || 5000
<<<<<<< HEAD

=======
const dotenv = require("dotenv")
>>>>>>> 53a2dc62b3535a2f0b3b72e98b7a432232b89a65
const app = express()



dotenv.config({
    path: path.join(__dirname, '/config/config.env')
  })


connectDB()


require('./config/passport')(passport)



//middlewares
app.use(express.json())
app.use(bodyParser.json());

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

//routes
//app.use('/', require('./routes/index'))
<<<<<<< HEAD
app.use('/auth',require('./routes/auth'))
=======
app.use('/api/events', require('./routes/events'));
app.use('/api/items', require('./routes/items'));
>>>>>>> 53a2dc62b3535a2f0b3b72e98b7a432232b89a65



app.listen(PORT, console.log(`server running on port ${PORT}`))
