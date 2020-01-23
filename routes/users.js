const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getTrainers()
      .then (trainers => {
        db.getpokemon()
        .then(pokemon => {
            res.render('index', {trainers: trainers, pokemon: pokemon })
        })
        
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.post ('/', (req, res) => {
  if(req.body.trainer !== 'None'){
    res.redirect('/trainer/'+req.body.trainer)
} else {
    res.redirect('/pokemon/'+req.body.pokemon)
}
})

module.exports = router
