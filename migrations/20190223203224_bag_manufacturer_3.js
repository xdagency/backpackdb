
exports.up = function(knex, Promise) {
    return knex.schema.table('bags', function (table) {
        table.integer('manufacturer_id').references('id').inTable('manufacturers');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.table('bags', function (table) {
        table.dropColumn('manufacturer_id');
    });
};
