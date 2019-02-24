/* ==================== */
/* REQUIRES             */
/* ==================== */

const   express = require('express'),
        router = express.Router();



/* ==================== */
/* ENDPOINTS            */
/* ==================== */

router.get('/bags', (req, res) => {
    console.log('bags GET endpoint hit!');
    res.send('Bag Get Route');
});


module.exports = router;