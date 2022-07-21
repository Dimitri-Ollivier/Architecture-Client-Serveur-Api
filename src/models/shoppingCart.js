const mongoose = require('mongoose')

const shoppingCartSchema = new mongoose.Schema({

    user_id: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
    quantity: { type: Number, required: true },
    weapon_id: { type: mongoose.Schema.ObjectId, ref: 'Weapon', required: false },
    accessory_id: { type: mongoose.Schema.ObjectId, ref: 'Accessory', required: false },
    last_update: { type: Date, required: true, default: Date.now() }

})

module.exports = mongoose.model('ShoppingCart',shoppingCartSchema)