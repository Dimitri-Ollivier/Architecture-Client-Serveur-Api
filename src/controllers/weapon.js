const Weapon = require('../models/weapon');

exports.getWeapons = async (req, res) => {
    try {
        const result = await Weapon.find()
        res.status(200).json(result)
    } catch (err) {
        res.status(400).send({ error: "Bad request !", description: err});
    }
}

exports.getWeaponById = async (req, res) => {
    try{
        const result = await Weapon.findById(req.params.id)
        res.status(200).json(result)
    }catch(err){
        res.status(400).send({ error: "Bad request !", description: err});
    }
}

exports.createWeapon = async (req, res) => {
    const weapon = new Weapon({
        name: req.body.name,
        description : req.body.description,
        manufacturer: req.body.manufacturer,
        type: req.body.type,
        features: req.body.features,
        country: req.body.country,
        price: req.body.price,
        quantity: req.body.quantity,
        available: req.body.available,
        created_at: req.body.created_at,
        last_update: req.body.last_update
    })

    try{
        const result =  await weapon.save();
        res.status(200).json(result);
    }catch(err){
        res.status(400).send({ error: "Bad request !", description: err});
    }
}

exports.updateWeapon = async (req, res) => {
    try{
        const weapon = await Weapon.findById(req.params.id);
        Object.assign(weapon, req.body);
        weapon.save();
        res.status(200).send({data: weapon});
    }catch(err){
        res.status(400).send({ error: "Bad request !", description: err});
    }
}

exports.deleteWeaponById = async (req, res) => {
    try{
        const weapon = await Weapon.findById(req.params.id)
        const result = await weapon.delete()
        res.json(result)
    }catch(err){
        res.status(400).send({ error: "Bad request !", description: err});
    }
}