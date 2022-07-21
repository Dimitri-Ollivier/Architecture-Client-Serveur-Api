const WeaponPicture = require('../models/weaponPicture');

exports.getWeaponPictures = async (req, res) => {
    try {
        const result = await WeaponPicture.find()
        res.status(200).json(result)
    } catch (err) {
        loadError(res, err);
    }
}

exports.getWeaponPictureById = async (req, res) => {
    try{
        const result = await WeaponPicture.findById(req.params.id)
        res.status(200).json(result)
    }catch(err){
        loadError(res, err);
    }
}

exports.createWeaponPicture = async (req, res) => {
    const weaponPicture = new WeaponPicture({
        weapon_id: req.body.weapon_id,
        picture_url : req.body.picture_url,
        number: req.body.number,
        created_at: req.body.created_at,
        last_update: req.body.last_update
    })

    try{
        const result =  await weaponPicture.save();
        res.status(200).json(result);
    }catch(err){
        loadError(res, err);
    }
}

exports.updateWeaponPicture = async (req, res) => {
    try{
        const weaponPicture = await WeaponPicture.findById(req.params.id);
        Object.assign(weaponPicture, req.body);
        weaponPicture.save();
        res.status(200).send({data: weaponPicture});
    }catch(err){
        loadError(res, err);
    }
}

exports.deleteWeaponPictureById = async (req, res) => {
    try{
        const weaponPicture = await WeaponPicture.findById(req.params.id)
        const result = await weaponPicture.delete()
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