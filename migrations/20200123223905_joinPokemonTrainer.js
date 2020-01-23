
exports.up = function(knex, Promise) {
    return knex.schema.createTable('pokemon-trainers', (table) => {
        table.integer ('trainer_id')
        table.integer ('pokemon_id')
        })
}

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('pokemon-trainers')
}