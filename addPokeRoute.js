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
    res.send('Hi')
})

module.exports = router