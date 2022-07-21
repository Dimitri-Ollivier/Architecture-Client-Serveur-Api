const express = require('express')
const router = express.Router()
const accessoryController = require('../controllers/accessories')

router.get('/', accessoryController.getAccessories);

router.get('/:id', accessoryController.getAccessoryById)

router.post('/', accessoryController.createAccessory)

router.post('/:id',accessoryController.updateAccessory)

router.delete('/:id',accessoryController.deleteAccessoryById)

module.exports = router