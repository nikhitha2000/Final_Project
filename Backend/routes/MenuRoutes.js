const express = require('express');
const MenuController = require("../Controllers/Menucontroller");

const router = express.Router();

router.get('/menu',MenuController);
router.post('/add',MenuController);
router.post('/fries',MenuController);
router.get('/menu1',MenuController);
router.get('/menu2',MenuController);
router.post('/colddrink',MenuController);
module.exports = router;