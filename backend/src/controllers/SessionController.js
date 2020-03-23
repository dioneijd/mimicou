const Team = require('../models/Team')


module.exports = {
    index(req, res){        
        return res.send('This is not implemented')
    },

    show(req, res){
        return res.send('This is not implemented')
    },

    async store(req, res) {        
        const {name} = req.body

        let team = await Team.findOne({ name })

        if (!team) {
            team = await Team.create({ name })
        }

        return res.json(team)
    },

    update(req, res){
        return res.send('This is not implemented')
    },

    destroy(req, res){
        return res.send('This is not implemented')
    },
}
