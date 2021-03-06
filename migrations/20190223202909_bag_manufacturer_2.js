
exports.up = function(knex, Promise) {
    return knex.schema.hasTable('bags', function (table) {
        table.foreign('manufacturer_id').references('id').inTable('manufacturers')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropForeign('manufacturer_id') // drop column when reverting
};
