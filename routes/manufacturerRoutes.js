/* ==================== */
/* REQUIRES             */
/* ==================== */

const   express = require('express'),
        router = express.Router();

// import model
const   Manufacturers = require('../models/manufacturers');


/* ==================== */
/* ENDPOINTS            */
/* ==================== */

// GET route for specific manufacturer
router.get('/manufacturer/:id', (req, res) => {

    // Get the manufacturer ID from the request
    let manufacturerId = req.params.id;

    // Search DB for the bag with that ID
    Manufacturers.where({ id: manufacturerId })
    .fetch()
    .then(result => {

        // If result is null, meaning nothing was found under that id then send a 404
        if (result === null) {
            res.status(404).send('No manufacturer found.');
        
        // otherwise send the json back
        } else {
            res.json(result);
        }
    })
    .catch(error => {
        console.log('/manufacturer/:id endpoint', error);
    })

});

// GET route for all manufacturers
router.get('/manufacturers', (req, res) => {
    
    // Get all the manufacturers in the DB
    // TODO: Paginate results
    Manufacturers.where(function() {
    })
    .fetchAll()
    .then(results => {
        res.json(results);
    })
    .catch(error => {
        console.log(error);
    })

});



module.exports = router;