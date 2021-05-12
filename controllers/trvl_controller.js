const express = require('express')
const trvl = express.Router()

trvl.get('/', (req, res) => {
  res.send('index')
})

module.exports = trvl
