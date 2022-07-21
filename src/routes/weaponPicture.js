const express = require('express')
const router = express.Router()
const weaponPictureController = require('../controllers/weaponPicture')

router.get('/', weaponPictureController.getWeaponPictures);

router.get('/:id', weaponPictureController.getWeaponPictureById)

router.post('/', weaponPictureController.createWeaponPicture)

router.post('/:id',weaponPictureController.updateWeaponPicture)

router.delete('/:id',weaponPictureController.deleteWeaponPictureById)

module.exports = router