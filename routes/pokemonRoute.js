const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/pokemon/:id', (req, res) => {

    db.getPokemonById(req.params.id)
        .then (pokemon => {
            res.render('pokemonView', {pokemon:pokemon})
        })
    
})

module.exports = router