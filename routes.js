const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');

// POST route to create data
router.post('/data', dataController.createData);

module.exports = router;
