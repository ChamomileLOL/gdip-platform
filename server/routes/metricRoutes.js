// 1. Get the Tools
const express = require('express');
const router = express.Router(); // The tool to create the path map

// 2. Get the Doorkeepers
const { getMetrics, createMetric } = require('../controllers/metricController');

// 3. Draw the Map
// Path: /api/v1/metrics
// Method: GET -> Use the getMetrics Doorkeeper
// Method: POST -> Use the createMetric Doorkeeper
router.route('/metrics').get(getMetrics).post(createMetric);

// 4. Publish the Map
module.exports = router;