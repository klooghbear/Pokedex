
exports.up = function(knex, Promise) {
    return knex.schema.createTable('pokemon', (table) => {
        table.increments('id').primary()
        table.string('name')
        table.string('type')
        table.string('url')
        table.string('blurb')
        table.string('ability')
        })
}

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('pokemon')
}