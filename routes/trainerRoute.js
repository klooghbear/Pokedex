const express = require('express')

const db = require('../db')

const router = express.Router()



router.get('/trainer/:id', (req, res) => {
  db.getTrainersAndPokemon(req.params.id)
  .then(trained => {
    db.getTrainersById(req.params.id)
    .then(trainers => {
    console.log(trainers)
      res.render('trainer', {trained: trained, trainers: trainers})
    })
  })
})


router.post('/banana', (req, res) => {
  res.redirect('/trainers/' + req.body.trainer)
})


module.exports = router