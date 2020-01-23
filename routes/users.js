const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getTrainers()
      .then (trainers => {
        db.getpokemon()
        .then(type => {
            res.render('index', {trainers: trainers, pokemon: pokemon })
        })
        
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
