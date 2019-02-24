
exports.up = function(knex, Promise) {
    return knex.schema.createTableIfNotExists('manufacturers', function (table) {
        table.increments('id').primary();
        table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
        table.timestamp('modified_at').notNullable().defaultTo(knex.fn.now());
        table.text('name').notNullable();
        table.string('url').notNullable();
        table.text('logo_url');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('manufacturers') // drop table when reverting
};
