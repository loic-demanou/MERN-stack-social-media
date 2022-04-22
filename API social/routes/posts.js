const router = require('express').Router();
const postContoller = require('../controllers/postController')

// create a post
router.post('/', postContoller.create )
// update a post
router.put('/:id', postContoller.update )
// delete a post
router.delete('/:id', postContoller.delete )
// like a post
router.put('/:id/like', postContoller.like )
// get a post
router.get('/:id', postContoller.getPostInfo )
// get timeline(all posts of the followings users) the posts
router.get('/timeline/all', postContoller.timeline )
module.exports= router;
