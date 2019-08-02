const express = require('express');
const router = express.Router();
const client = require('./db');

router.get('/', (req, res) => {
    client.query('select * from ws_articles;',
        (error, result) => {
            res.json(result.rows);
        });
});

module.exports = router;