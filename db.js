const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getTrainers,
  getpokemon,
}

function getTrainers(name, db = connection) {
 return db('trainers')
 .where('trainers.id', name)
 .select()
}
function getpokemon(db = connection) {
  return db('pokemon')
  .select()
}

function getTrainersAndPokemon(db = connection) {
  
}