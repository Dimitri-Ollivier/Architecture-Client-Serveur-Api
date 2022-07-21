const mongoose = require('mongoose')

const weaponSchema = new mongoose.Schema({

    name: { type: String, required: true },
    description: { type: String, required: true },
    manufacturer: { type: String, required: true },
    type: { type: String, required: true },
    features: {
        caliber: { type: Number, required: false },
        length: { type: Number, required: false },
        weight: { type: Number, required: false },
        rate_of_fire: { type: String, required: false },
        required_licence: { type: String, required: false }
    },
    country: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    available: { type: Boolean, required: true, default: true },
    created_at: { type: Date, required: true, default: Date.now() },
    last_update: { type: Date, required: true, default: Date.now() }

})

module.exports = mongoose.model('Weapon',weaponSchema)