const express = require('express')
const router = express.Router()
const weaponController = require('../controllers/weapon')

router.get('/', weaponController.getWeapons);

router.get('/:id', weaponController.getWeaponById)

router.post('/', weaponController.createWeapon)

router.post('/:id',weaponController.updateWeapon)

router.delete('/:id',weaponController.deleteWeaponById)

module.exports = router