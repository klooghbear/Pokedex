const express = require('express')
const hbs = require('express-handlebars')

const userRoutes = require('./routes/users')
const pokemonRoutes = require('./routes/pokemonRoute')

const server = express()

// Middleware

server.engine('hbs', hbs({extname: 'hbs'}))
server.set('view engine', 'hbs')
server.use(express.urlencoded({extended: true}))
server.use(express.static('public'))

// Routes

server.use('/', userRoutes)
server.use('/', pokemonRoutes)

server.get('/test', (req, res) => {
    res.send('hello.')
})

module.exports = server
