const mongoose = require('mongoose')

const accessorySchema = new mongoose.Schema({

    name: { type: String, required: true },
    description: { type: String, required: true },
    manufacturer: { type: String, required: true },
    type: { type: String, required: true },
    features: {
        magazine_capacity: { type: Number, required: false },
        magazine_bullet: { type: String, required: false },
        gun_sights: { type: String, required: false }
    },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    available: { type: Boolean, required: true, default: true },
    created_at: { type: Date, required: true, default: Date.now() },
    last_update: { type: Date, required: true, default: Date.now() }

})

module.exports = mongoose.model('Accessory',accessorySchema)