'use strict';

const Bookshelf = require('../database');

require('./bags');
const Manufacturers = Bookshelf.Model.extend({
    // tell bookself which table to interact with
    tableName: 'manufacturers',
    // create the relationships
    manufacturers: function() {
        return this.belongsTo('Bags');
    }
})

module.exports = Bookshelf.model('Manufacturers', Manufacturers);