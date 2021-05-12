const express = require('express')
const mongoose = require('mongoose')
const app = express()
require('dotenv').config()
const MONGODB_URI = process.env.MONGODB_URI

PORT = process.env.PORT

const trvlController =require('./controllers/trvl_controller.js')


app.use('trvl', trvlController)




app.get('/', (req,res)=>{
  res.send('Hello World')
})

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
