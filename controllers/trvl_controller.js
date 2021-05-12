const express = require('express')
const trvl = express.Router()
const Trvl = require('../models/trvl.js')

// INDEX
trvl.get('/', (req, res) => {
  Trvl.find({},(err,foundTrvl) => {
    res.json(foundTrvl)
  })
})
// CREATE ROUTE
trvl.post('/', (req,res) => {
  Trvl.create(req.body, (err, createdTrvl) => {
    Trvl.find({}, (err,foundTrvl) => {
      res.json(foundTrvl)
    })
  })
})
// Update
trvl.put('/:id',(req,res) => {
  Trvl.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new:true},
    (err,updatedTrvl) => {
      if (err) {
        res.send(err)
      } else {
        Trvl.find({}, (err,foundTrvl) => {
          res.json(foundTrvl)
        })
      }
    }
  )
})
// Delete ROUTE
trvl.delete('/:id',(req,res) => {
  Trvl.findByIdAndRemove(req.params.id,(err,deletedTrvl) => {
    Trvl.find({},(er,foundTrvl) => {
      res.json(foundTrvl)
    })
  })
})
module.exports = trvl
