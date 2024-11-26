const express = require('express');
const MenuItem = require("../models/Menu");
const Fries = require("../models/Fries");
const colddrink = require("../models/ColdDrinks");
const router = express.Router();

router.get("/menu",async(req,res)=>{
    try{
        const menuItems = await MenuItem.find();
        res.status(200).json(menuItems);
    }catch(err){
        console.error(err);
        res.status(500).json({message: "Failed to fetch menu items."})
    }
})
router.get("/menu1",async(req,res)=>{
  try{
      const menuItems = await Fries.find();
      res.status(200).json(menuItems);
  }catch(err){
      console.error(err);
      res.status(500).json({message: "Failed to fetch menu items."})
  }
})
router.get("/menu2",async(req,res)=>{
  try{
      const menuItems = await colddrink.find();
      res.status(200).json(menuItems);
  }catch(err){
      console.error(err);
      res.status(500).json({message: "Failed to fetch menu items."})
  }
})
router.post('/add', async (req, res) => {
    const { name, description, price, imageUrl } = req.body;
  
    try {
      const newItem = new MenuItem({ name, description, price, imageUrl });
      await newItem.save();
      res.status(200).json({ message: 'Menu item added successfully!' });
    } catch (err) {
      res.status(500).json({ message: 'Failed to add menu item', error: err });
    }
  });
  router.post('/fries', async (req, res) => {
    const { name, description, price, imageUrl } = req.body;
  
    try {
      const newItem = new Fries({ name, description, price, imageUrl });
      await newItem.save();
      res.status(200).json({ message: 'Menu item added successfully!' });
    } catch (err) {
      res.status(500).json({ message: 'Failed to add menu item', error: err });
    }
  });
  router.post('/colddrink', async (req, res) => {
    const { name, description, price, imageUrl } = req.body;
    try {
      const newItem = new colddrink({ name, description, price, imageUrl });
      await newItem.save();
      res.status(200).json({ message: 'Menu item added successfully!' });
    } catch (err) {
      res.status(500).json({ message: 'Failed to add menu item', error: err });
    }
  });
module.exports = router;