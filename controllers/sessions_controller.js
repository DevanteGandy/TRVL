const bcrypt = require('bcrypt')
const express = require('express')
const sessions = express.Router()
const User = require('../models/users.js')




sessions.post('/', (req,res)=>{
  User.findOne({
    username: req.body.username
  }, (err, foundUser)=>{
    if (err) {
      res.send('database error')
    } else if (!foundUser){
      res.send('<a href="/"> Sorry, no user found </a>')
    } else {
      if (bcrypt.compareSync(req.body.password, foundUser.password)) {
        req.session.currentUser = foundUser
        res.json(req.session.currentUser)
      } else {
        res.send('<a href="/"> password does not match </a>')
      }
    }
  })
})

sessions.delete("/", (req,res)=>{
  req.session.destroy(()=>{
    res.redirect("/")
  })
})
module.exports = sessions
