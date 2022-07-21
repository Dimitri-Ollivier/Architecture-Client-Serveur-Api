const ShoppingCart = require('../models/shoppingCart');

exports.getShoppingCarts = async (req, res) => {
    try {
        const result = await ShoppingCart.find()
        res.status(200).json(result)
    } catch (err) {
        loadError(res, err);
    }
}

exports.getShoppingCartById = async (req, res) => {
    try{
        const result = await ShoppingCart.findById(req.params.id)
        res.status(200).json(result)
    }catch(err){
        loadError(res, err);
    }
}

exports.createShoppingCart = async (req, res) => {
    const shoppingCart = new ShoppingCart({
        user_id: req.body.user_id,
        quantity: req.body.quantity,
        weapon_id : req.body.weapon_id,
        accessory_id: req.body.accessory_id,
        last_update: req.body.last_update
    })

    try{
        const result =  await shoppingCart.save();
        res.status(200).json(result);
    }catch(err){
        loadError(res, err);
    }
}

exports.updateShoppingCart = async (req, res) => {
    try{
        const shoppingCart = await ShoppingCart.findById(req.params.id);
        Object.assign(shoppingCart, req.body);
        shoppingCart.save();
        res.status(200).send({data: shoppingCart});
    }catch(err){
        loadError(res, err);
    }
}

exports.deleteShoppingCartById = async (req, res) => {
    try{
        const shoppingCart = await ShoppingCart.findById(req.params.id)
        const result = await shoppingCart.delete()
        res.json(result)
    }catch(err){
        loadError(res, err);
    }
}

function loadError(res, err) {
    res.status(400).send({ error: "Bad request !", description: err});

    res.status(404).send({ error: "Shopping cart not found !", description: err});

    res.status(500).send({ error: "Server error !", description: err});
}