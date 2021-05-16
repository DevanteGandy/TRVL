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


users.post('/', (req,res)=>{
=======

users.post('/signup', (req,res)=>{


users.post('/', (req,res)=>{

>>>>>>> 8040fc5da775b6690f3c94ff0ce2b274c5e62722
  req.body.username = req.body.username
  req.body.password = bcrypt.hashSync(
    req.body.password,
    bcrypt.genSaltSync(10));
  User.create(req.body, (err, createdUser)=>{
    console.log('user is created: ', createdUser)

  })
})




module.exports = users
