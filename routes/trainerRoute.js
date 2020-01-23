const express = require('express')

const db = require('../db')

const router = express.Router()



router.get('/trainers/:id', (req, res) => {
    db.getTrainers(req.params.id)
    .then(trainer => {
      console.log(trainer)
      res.render('trainer', {trainer: trainer})
    })
})





module.exports = router