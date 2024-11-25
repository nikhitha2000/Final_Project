const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: String, required: true },
    imageUrl: { type: String, required: true },
})

module.exports = mongoose.model('MenuItem', menuItemSchema);