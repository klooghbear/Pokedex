const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getTrainers,
  getgetpokemon,
}

function getTrainers(db = connection) {
 return db('trainers')
 .select('name')
}
function getgetpokemon(db = connection) {
  return db('pokemon')
  .select('name')
}