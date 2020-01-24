const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/addNewPoke', (req, res) => {
    db.getTrainers()
    .then(trainer => {
        res.render('addPokeView', {trainer: trainer})
    })
})

router.post('/addNewPoke', (req, res) => {
    console.log(req.body)

    var trainerId = req.body.trainer

    db.addNewPokemon(req.body.name, req.body.type, req.body.url, req.body.blurb, req.body.ability)
    .then(pokemonId => {
        if(trainerId < '9999'){
            console.log(Number(trainerId), Number(pokemonId))
            return db.addNewPokeJoin(Number(trainerId), Number(pokemonId))
        }
    }).then( () => res.redirect('/')
    )
})

module.exports = router