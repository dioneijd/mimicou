const mongo = require('mongoose')

const Room = new mongo.Schema({
    team1: {
        type: mongo.Schema.Types.ObjectId,
        ref: 'Team'
    }, 
    team2: {
        type: mongo.Schema.Types.ObjectId,
        ref: 'Team'
    },
    scores: {
        team1: Number,
        team2: Number
    }   

})

module.exports = mongo.model('Room', Room)