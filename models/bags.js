'use strict';

const Bookshelf = require('../database');

require('./manufacturers');
const Bags = Bookshelf.Model.extend({
    // tell bookself which table to interact with
    tableName: 'bags',
    // create the relationships
    manufacturers: function() {
        return this.hasOne('Manufacturers');
    }
})

module.exports = Bookshelf.model('Bags', Bags);