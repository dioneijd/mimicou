const Room = require('../models/Room')


module.exports = {
    async store(req, res) {
        const {team1, team2, scores} = req.body


        let room = await Room.create({team1, team2, scores})

        return res.json(room)

    }



}

// index: retorna uma listagem
// show: retorna um unico registro
// store: criar um novo registro
// update: atualizar um registro
// destroy: deletar um registro