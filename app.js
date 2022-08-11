require('dotenv').config()

const Server = require('./models/server')


// Crear el servidor
const server = new Server()

server.listen()


