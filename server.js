const express = require('express')
const hbs = require('express-handlebars')
const userRoutes = require('./routes/users')
const trainerRoute = require('./routes/trainerRoute')
const pokemonRoutes = require('./routes/pokemonRoute')
const addPokeRoutes = require('./routes/addPokeRouter')

const db = require('./db')
const server = express()

// Middleware

server.engine('hbs', hbs({
    extname: 'hbs',
    defaultLayout: 'main'
}))  

server.set('view engine', 'hbs')
server.use(express.urlencoded({extended: true}))
server.use(express.static('public'))

// Routes

server.use('/', userRoutes)
server.use('/', pokemonRoutes)
server.use('/', addPokeRoutes)

server.get('/test/:id', (req, res) => { 
    db.getTrainersAndPokemon(req.params.id)
    .then( trained => {
        db.getTrainersById(req.params.id)
        .then(trainers => {
            console.log(trainers)
            res.send(trained)
        })
    })
})

server.use('/', trainerRoute)

module.exports = server
