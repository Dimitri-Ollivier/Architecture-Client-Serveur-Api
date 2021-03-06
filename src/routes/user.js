const express = require('express')
const router = express.Router()
const userController = require('../controllers/user')

router.get('/', userController.getUsers);

router.get('/:id', userController.getUserById)

router.post('/', userController.createUser)

router.post('/:id',userController.updateUser)

router.delete('/:id',userController.deleteUserById)

module.exports = router