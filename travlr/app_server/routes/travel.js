// app_server/routes/travel.js
const express = require('express');
const { getTrips } = require('../controllers/travelController');

const router = express.Router();

// GET all trips
router.get('/api/trips', getTrips);

module.exports = router;
