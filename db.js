const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getTrainers,
  getpokemon,
  getTrainersAndPokemon,
  getTrainersById,
  getPokemonById,
  addNewPokemon,
  addNewPokeJoin,
  test
}

function getTrainers(db = connection) {
 return db('trainers')
 .select()
}

function getpokemon(db = connection) {
  return db('pokemon')
  .select()
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
  .where('trainers.id', '=', name)
  .select('*')
 }

 function getPokemonById(name, db = connection) {
  return db('pokemon')
  .where('pokemon.id', '=', name)
  .select('*')
}

function addNewPokemon(nName, nType, nUrl, nBlurb, nAbility, nTrainer, db = connection) {
  return db('pokemon')
  .insert({
    name: nName,
    type: nType,
    url: nUrl,
    blurb: nBlurb,
    ability: nAbility
  })  
}

function test() {
  console.log("heyyyy")
}


function addNewPokeJoin(trainerId, pokeId, db = connection) {
  return db('pokemon-trainers')
  .insert({
    trainer_id: trainerId,
    pokemon_id: pokeId
  }) 
}