/* ==================== */
/* REQUIRES             */
/* ==================== */

const   express = require('express'),
        router = express.Router();

// import model
const   Bags = require('../models/bags');


/* ==================== */
/* ENDPOINTS            */
/* ==================== */

// GET route for specific bag
router.get('/bag/:id', (req, res) => {
    
    // Get the bag ID from the request
    let bagId = req.params.id;

    // Search DB for the bag with that ID
    Bags.where({ id: bagId })
    .fetch()
    .then(result => {
        
        // If result is null, meaning nothing was found under that id then send a 404
        if (result === null) {
            res.status(404).send('No bag found.');
        
        // otherwise send the json back
        } else {
            res.json(result);
        }
    })
    .catch(error => {
        console.log('/bag/:id endpoint', error);
    })

});

// GET route for all bags
router.get('/bags', (req, res) => {
    
    // Get all bags from DB
    // TODO: Paginate results
    Bags.where(function() {
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