const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getTrainers,
  getgetpokemon,
  getTrainersAndPokemon,
  getTrainersById
}

function getTrainers(db = connection) {
 return db('trainers')
 .select('name')
}

function getgetpokemon(db = connection) {
  return db('pokemon')
  .select('name')
}

function getTrainersAndPokemon(id, db = connection) {
  return db('pokemon-trainers')
  .join('trainers', 'trainers.id', '=', 'trainer_id')
  .join('pokemon', 'pokemon.id', '=', 'pokemon_id')
  .where('pokemon-trainers.trainer_id', '=', id)
  .select('pokemon.name', 'pokemon.type')
}

function getTrainersById(name, db = connection) {
  return db('trainers')
  .where('trainers.name', '=', name)
  .select('*')
 }

 function getPokemonById(name, db = connection) {
  return db('pokemon')
  .where('pokemon.id', '=', name)
  .select('name')
}

// server.get('/test/:id', (req, res) => { 
//   db.getTrainersAndPokemon(req.params.id)
//   .then( trained => {
//       db.getTrainersById(req.params.id)
//       .then(trainers => {
//           console.log(trainers)
//           res.send(trained)
//       })
//   })
// })
