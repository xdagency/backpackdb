
exports.up = function(knex, Promise) {
    return knex.schema.createTableIfNotExists('bags', function (table) {
        table.increments('id').primary();
        table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
        table.timestamp('modified_at').notNullable().defaultTo(knex.fn.now());
        table.text('name').notNullable();
        table.text('description');
        table.string('url').notNullable();
        table.integer('capacity');
        table.integer('height');
        table.integer('length');
        table.integer('width');
        table.float('weight');
        table.float('avg_rating');
        table.integer('num_votes');
        table.string('type');
        table.integer('pockets');
        table.text('thumbnail_url');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('bags') // drop table when reverting
};
