const express = require('express')
const mongoose = require('mongoose')
const app = express()
const session = require('express-session')
const methodOverride = require('method-override')

require('dotenv').config()
const MONGODB_URI = process.env.MONGODB_URI

PORT = process.env.PORT
app.use(express.json())

const sessionsController = require('./controllers/sessions_controller.js')
app.use('/sessions', sessionsController)
const userController = require('./controllers/users_controller.js')
app.use('/users', userController)
const trvlController = require('./controllers/trvl_controller.js')
app.use('/trvl', trvlController)

app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }))
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
  })
)

app.use(express.static('public'))



app.listen(PORT, ()=>{
  console.log('Everything is fine at port ', PORT)
})

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})


mongoose.connection.on('error', err =>
  console.log(
    err.message,
    ' is Mongod not running?/Problem with Atlas Connection?'
  )
)
mongoose.connection.on('connected', () =>
  console.log('mongo connected: ', MONGODB_URI)
)
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'))
