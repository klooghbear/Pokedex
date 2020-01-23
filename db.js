const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getTrainers,
  getpokemon,
}

function getTrainers(db = connection) {
 return db('trainers')
 .select()
}
function getpokemon(db = connection) {
  return db('pokemon')
  .select()
}

function getTrainersAndPokemon(db = connection) {
  
}