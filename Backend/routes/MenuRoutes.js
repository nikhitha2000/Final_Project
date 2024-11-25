const express = require('express');
const MenuController = require("../Controllers/Menucontroller");

const router = express.Router();

router.get('/menu',MenuController);
router.post('/add',MenuController);

module.exports = router;