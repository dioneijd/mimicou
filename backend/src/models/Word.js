const mongoose = require('mongoose')

const WordSchema = new mongoose.Schema({
    word: String,
    category: String,
    score: Number
})

module.exports = mongoose.model('Word', WordSchema)