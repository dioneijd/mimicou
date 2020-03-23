const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')

const app = express()


mongoose.connect('mongodb+srv://mimicou:m1m1c0u@cluster0-z6ohu.mongodb.net/mimicou?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})


app.use(express.json())
app.use(routes)

app.listen(3333)