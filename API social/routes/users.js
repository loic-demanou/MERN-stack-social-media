const router = require('express').Router();
const userController = require('../controllers/userController')

router.get('/', userController.getAllUsers )

router.get('/:id', userController.userInfo )
router.put('/:id', userController.updateUsers )
router.delete('/:id', userController.deleteUser )
router.put('/:id/follow', userController.follow )
router.put('/:id/unfollow', userController.unfollow )

module.exports= router;
