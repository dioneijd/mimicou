const express = require('express')
const SessionController = require('./controllers/SessionController')
const WordController = require('./controllers/WordController')
const RoomController = require('./controllers/RoomControllers')

const routes = express.Router()



routes.get('/sessions', SessionController.index)
routes.get('/sessions/:id', SessionController.show)
routes.post('/sessions', SessionController.store)
routes.put('/sessions/:id', SessionController.update)
routes.delete('/sessions/:id', SessionController.destroy)


routes.get('/words', WordController.index)
routes.get('/words/:id', WordController.show)
routes.post('/words', WordController.store)
routes.put('/words/:id', WordController.update)
routes.delete ('/words/:id', WordController.destroy)

routes.post('/rooms', RoomController.store)

module.exports = routes