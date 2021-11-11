exports.up = (knex) => knex.schema.createTable('addresses', (table) => {
  table.increments('id')
  table.text('zip_code').notNullable().unique()
  table.text('location').notNullable()
  table.text('district').notNullable()
  table.text('city').notNullable()
  table.text('state').notNullable()
})

exports.down = (knex) => knex.schema.dropTable('addresses')
