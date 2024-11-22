const express = require('express');
const authController = require("../Controllers/Authcontroller");

const router = express.Router();

// Use the controller functions for signup and signin
router.post('/signup', authController.signup);
router.post('/signin', authController.signin);
router.get('/restaurants', authController.restaurants);

module.exports = router; 
