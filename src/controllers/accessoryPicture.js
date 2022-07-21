const AccessoryPicture = require('../models/accessoryPicture');

exports.getAccessoryPictures = async (req, res) => {
    try {
        const result = await AccessoryPicture.find()
        res.status(200).json(result)
    } catch (err) {
        loadError(res, err);
    }
}

exports.getAccessoryPictureById = async (req, res) => {
    try{
        const result = await AccessoryPicture.findById(req.params.id)
        res.status(200).json(result)
    }catch(err){
        loadError(res, err);
    }
}

exports.createAccessoryPicture = async (req, res) => {
    const accessoryPicture = new AccessoryPicture({
        Accessory_id: req.body.Accessory_id,
        picture_url : req.body.picture_url,
        number: req.body.number,
        created_at: req.body.created_at,
        last_update: req.body.last_update
    })

    try{
        const result =  await accessoryPicture.save();
        res.status(200).json(result);
    }catch(err){
        loadError(res, err);
    }
}

exports.updateAccessoryPicture = async (req, res) => {
    try{
        const accessoryPicture = await AccessoryPicture.findById(req.params.id);
        Object.assign(accessoryPicture, req.body);
        accessoryPicture.save();
        res.status(200).send({data: accessoryPicture});
    }catch(err){
        loadError(res, err);
    }
}

exports.deleteAccessoryPictureById = async (req, res) => {
    try{
        const accessoryPicture = await AccessoryPicture.findById(req.params.id)
        const result = await accessoryPicture.delete()
        res.json(result)
    }catch(err){
        loadError(res, err);
    }
}

function loadError(res, err) {
    res.status(400).send({ error: "Bad request !", description: err});

    res.status(404).send({ error: "Picture not found !", description: err});

    res.status(500).send({ error: "Server error !", description: err});
}