const mongo = require('mongoose')

const TeamSchema = new mongo.Schema({
    name: String
})

module.exports = mongo.model('Team', TeamSchema)