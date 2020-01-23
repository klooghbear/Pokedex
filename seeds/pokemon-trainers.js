
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('pokemon-trainers').del()
    .then(function () {
      // Inserts seed entries
      return knex('pokemon-trainers').insert([
        {trainer_id: 1, pokemon_id: 1},
        {trainer_id: 1, pokemon_id: 8},
        {trainer_id: 2, pokemon_id: 3},
        {trainer_id: 2, pokemon_id: 2},
        {trainer_id: 3, pokemon_id: 7},
        {trainer_id: 3, pokemon_id: 9},
        {trainer_id: 4, pokemon_id: 4},
        {trainer_id: 4, pokemon_id: 5},
        {trainer_id: 4, pokemon_id: 9},
        {trainer_id: 4, pokemon_id: 10},
        {trainer_id: 5, pokemon_id: 7},
        {trainer_id: 5, pokemon_id: 3},
      ]);
    });
};

//trainers
  //1 - Ash
  //2 - Misty
  //3 - Brock
  //4 - Cynthia
  //5 - Steven Stone