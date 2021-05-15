<<<<<<< HEAD

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = Schema({
  username: { type: String, unique: true, required: true },
  password: String,
=======
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = Schema({
  username:{type: String, unique: true, required: true},
  password: {type:String, required: true}
>>>>>>> 684b8c315c2d9637e64095f48f51b6869cefc62a
})

const User = mongoose.model('User', userSchema)

module.exports = User
