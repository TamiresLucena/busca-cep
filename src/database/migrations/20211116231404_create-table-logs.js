exports.up = (knex) => knex.schema.createTable('logs', (table) => {
  table.increments('id')
  table.integer('user_id').notNullable()
  table.text('request_url').notNullable()

  table.foreign('user_id').references('id').inTable('users')

  table.timestamp('created_at').notNullable().defaultTo(knex.fn.now())
})

exports.down = (knex) => knex.schema.dropTable('logs')
