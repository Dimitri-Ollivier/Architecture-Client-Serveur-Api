const express = require('express')
const router = express.Router()
const shoppingCartController = require('../controllers/shoppingCart')

router.get('/', shoppingCartController.getShoppingCarts);

router.get('/:id', shoppingCartController.getShoppingCartById)

router.post('/', shoppingCartController.createShoppingCart)

router.post('/:id',shoppingCartController.updateShoppingCart)

router.delete('/:id',shoppingCartController.deleteShoppingCartById)

module.exports = router