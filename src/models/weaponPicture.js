const mongoose = require('mongoose')

const weaponPictureSchema = new mongoose.Schema({

    weapon_id: { type: mongoose.Schema.ObjectId, ref: 'Weapon', required: true },
    picture_url: { type: String, required: true },
    number: { type: Number, required: true },
    created_at: { type: Date, required: true, default: Date.now() },
    last_update: { type: Date, required: true, default: Date.now() }

})

module.exports = mongoose.model('WeaponPicture', weaponPictureSchema)