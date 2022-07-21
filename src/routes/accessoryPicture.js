const express = require('express')
const router = express.Router()
const accessoryPictureController = require('../controllers/accessoryPicture')

router.get('/', accessoryPictureController.getAccessoryPictures);

router.get('/:id', accessoryPictureController.getAccessoryPictureById)

router.post('/', accessoryPictureController.createAccessoryPicture)

router.post('/:id',accessoryPictureController.updateAccessoryPicture)

router.delete('/:id',accessoryPictureController.deleteAccessoryPictureById)

module.exports = router