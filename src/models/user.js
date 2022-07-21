const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    name: { type: String, required: true },
    surname: { type: String, required: true },
    mail : { type: String, required: true },
    password: { type: String, required: true },
    token: { type: String, required: true },
    country: { type: String, required: true },
    zip_code: { type: Number, required: true },
    city: { type: String, required: true },
    street: { type: String, required: true },
    created_at: { type: Date, required: true, default: Date.now() },
    last_update: { type: Date, required: true, default: Date.now() }

})

module.exports = mongoose.model('User',userSchema)