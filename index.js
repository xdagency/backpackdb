/* ==================== */
/* REQUIRES             */
/* ==================== */

const   express = require('express'),
        app = express(),
        bodyParser = require('body-parser'),
        config = require('./config');



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



/* ==================== */
/* GLOBAL VARS          */
/* ==================== */

const PORT = process.env.PORT || 8181;



/* ==================== */
/* LISTEN               */
/* ==================== */

app.listen(PORT, () => {
    console.log('We are up on', PORT);
})
