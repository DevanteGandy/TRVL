const express = require('express')
const mongoose = require('mongoose')
const app = express()
require('dotenv').config()
const MONGODB_URI = process.env.MONGODB_URI
<<<<<<< HEAD

PORT = process.env.PORT
app.use(express.json())
const trvlController =require('./controllers/trvl_controller.js')
app.use('/trvl', trvlController)
=======

PORT = process.env.PORT

const trvlController =require('./controllers/trvl_controller.js')


app.use('trvl', trvlController)



>>>>>>> 25ff8f198946cd7afb4bbbdc89df88c97b830236


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
