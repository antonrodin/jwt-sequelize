const express = require('express');
const router = express.Router();

// Home
router.get('/', (req, res) => res.json({ hello: "World" }));

module.exports = router;