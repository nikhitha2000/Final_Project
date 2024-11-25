const express = require('express');
const MenuItem = require("../models/Menu");

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
  

module.exports = router;