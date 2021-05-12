const mongoose = require('mongoose')


const trvlSchema = new mongoose.Schema({
  entryTitle: String,
  date: String,
  image: String,
  rating: String,
  comments: String
})

const Trvl = mongoose.model('Trvl',trvlSchema)
module.exports = Trvl;
