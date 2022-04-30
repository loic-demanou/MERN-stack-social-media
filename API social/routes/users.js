const router = require('express').Router();
const userController = require('../controllers/userController')

// router.get('/', userController.getAllUsers )

// get a user query with the username and user id, like
// localhost:8008/ users?username="loic" || localhost:8008/ users?UserId="qsdjnqsjdnqskd"
router.get('/', userController.userInfo )


router.put('/:id', userController.updateUsers )
router.delete('/:id', userController.deleteUser )
router.put('/:id/follow', userController.follow )
router.put('/:id/unfollow', userController.unfollow )

module.exports= router;
