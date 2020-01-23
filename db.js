const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getTrainers,
  getgetpokemon,
}

function getTrainers(db = connection) {

}
function getgetpokemon(db = connection) {

}