const User = require('../models/user');

exports.getUsers = async (req, res) => {
    try {
        const result = await User.find()
        res.status(200).json(result)
    } catch (err) {
        loadError(res, err);
    }
}

exports.getUserById = async (req, res) => {
    try{
        const result = await User.findById(req.params.id)
        res.status(200).json(result)
    }catch(err){
        loadError(res, err);
    }
}

exports.createUser = async (req, res) => {
    const user = new User({
        name: req.body.name,
        surname: req.body.surname,
        mail : req.body.mail,
        password: req.body.password,
        token: req.body.token,
        country: req.body.country,
        zip_code: req.body.zip_code,
        city: req.body.city,
        street: req.body.street,
        created_at: req.body.created_at,
        last_update: req.body.last_update
    })

    try{
        const result =  await user.save();
        res.status(200).json(result);
    }catch(err){
        loadError(res, err);
    }
}

exports.updateUser = async (req, res) => {
    try{
        const user = await User.findById(req.params.id);
        Object.assign(user, req.body);
        user.save();
        res.status(200).send({data: user});
    }catch(err){
        loadError(res, err);
    }
}

exports.deleteUserById = async (req, res) => {
    try{
        const user = await User.findById(req.params.id)
        const result = await user.delete()
        res.json(result)
    }catch(err){
        loadError(res, err);
    }
}

function loadError(res, err) {
    res.status(400).send({ error: "Bad request !", description: err});

    res.status(404).send({ error: "User not found !", description: err});

    res.status(500).send({ error: "Server error !", description: err});
}