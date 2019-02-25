/* ==================== */
/* REQUIRES             */
/* ==================== */

const   express = require('express'),
        app = express(),
        bodyParser = require('body-parser'),
        bagRoutes = require('./routes/bagRoutes'),
        manufacturerRoutes = require('./routes/manufacturerRoutes'),
        config = require('./config');

// DB
// const knex = require('knex')({
//     client: 'pg',
//     connection: {
//         host     : '127.0.0.1',
//         user     : 'postgres',
//         password : 'postgres',
//         database : 'backpackdb',
//         charset  : 'utf8'
//     }
// });

// then connect bookshelf with knex
// const bookshelf = require('bookshelf')(knex);
const bookshelf = require('./database');



/* ==================== */
/* USE                  */
/* ==================== */

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// headers to fix CORS issues
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Mount bag routes
app.use('/api', bagRoutes);
app.use('/api', manufacturerRoutes);



/* ==================== */
/* GLOBAL VARS          */
/* ==================== */

const PORT = process.env.PORT || 8181;


/* ==================== */
/* MODELS               */
/* ==================== */



/* ==================== */
/* LISTEN               */
/* ==================== */

app.listen(PORT, () => {
    console.log(':) We are up on', PORT);
})
