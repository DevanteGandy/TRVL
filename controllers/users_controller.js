const bcrypt = require('bcrypt')
const express = require('express')
const users = express.Router()
const User = require('../models/users.js')

users.get('/login', (req, res) =>{
  User.find({}, (err, foundUser)=>{
    res.json(foundUser, {
      currentUser: req.session.currentUser
    })
  })
})

<<<<<<< HEAD
users.post('/signup', (req,res)=>{
=======

users.post('/', (req,res)=>{
>>>>>>> a246b6976e840c8230b640b2e7cec79cc86bdd90
  req.body.username = req.body.username
  req.body.password = bcrypt.hashSync(
    req.body.password,
    bcrypt.genSaltSync(10));
  User.create(req.body, (err, createdUser)=>{
    console.log('user is created: ', createdUser)
    res.redirect('/')
  })
})




module.exports = users
