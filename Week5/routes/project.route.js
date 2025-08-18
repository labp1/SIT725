const express = require('express');
const router = express.Router();

// Import all controllers via index.js
const controllers = require('../controllers')

router.get('/', controllers.projectController.getAllProjects);

// Export project router
module.exports = router;