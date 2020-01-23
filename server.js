const express = require('express')
const hbs = require('express-handlebars')

const userRoutes = require('./routes/users')

const db = require('./db')
const server = express()

// Middleware

server.engine('hbs', hbs({extname: 'hbs'}))
server.set('view engine', 'hbs')
server.use(express.urlencoded({extended: true}))
server.use(express.static('public'))

// Routes

server.use('/', userRoutes)

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

module.exports = server
