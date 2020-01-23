exports.up = (knex, Promise) => {
  return knex.schema.createTable('trainers', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('gym')
    table.string('town')
    table.string('url')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('trainers')
}
