const Accessory = require('../models/Accessory');

exports.getAccessories = async (req, res) => {
    try {
        const result = await Accessory.find()
        res.status(200).json(result)
    } catch (err) {
        loadError(res, err);
    }
}

exports.getAccessoryById = async (req, res) => {
    try{
        const result = await Accessory.findById(req.params.id)
        res.status(200).json(result)
    }catch(err){
        loadError(res, err);
    }
}

exports.createAccessory = async (req, res) => {
    const accessory = new Accessory({
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
        const result =  await accessory.save();
        res.status(200).json(result);
    }catch(err){
        loadError(res, err);
    }
}

exports.updateAccessory = async (req, res) => {
    try{
        const accessory = await Accessory.findById(req.params.id);
        Object.assign(accessory, req.body);
        accessory.save();
        res.status(200).send({data: accessory});
    }catch(err){
        loadError(res, err);
    }
}

exports.deleteAccessoryById = async (req, res) => {
    try{
        const Accessory = await Accessory.findById(req.params.id)
        const result = await Accessory.delete()
        res.json(result)
    }catch(err){
        loadError(res, err);
    }
}

function loadError(res, err) {
    res.status(400).send({ error: "Bad request !", description: err});

    res.status(404).send({ error: "Accessory not found !", description: err});

    res.status(500).send({ error: "Server error !", description: err});
}