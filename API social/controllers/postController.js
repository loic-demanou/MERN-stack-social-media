const Post = require("../models/Post");
const User = require("../models/User");

module.exports.create = async (req, res) => {
    const post = new Post(req.body);
    try {
        const savedPost = await post.save();
        res.status(201).json(savedPost);
    } catch (err) {
        res.status(500).json(err);
    }
}
module.exports.update = async (req, res) => {
    const post = await Post.findById(req.params.id);
    try {
        if (post.userId === req.body.userId) {
            await post.updateOne({$set:req.body});
            res.status(200).json("Mise à jour avec success");
        } else {
            res.status(403).json("Vous ne pouvez modifier que votre publication");
        }
    } catch (err) {
        res.status(500).json(err);
    }
}
module.exports.delete = async (req, res) => {
    const post = await Post.findById(req.params.id);
    try {
        if (post.userId === req.body.userId) {
            await post.deleteOne();
            res.status(200).json("Supprimé avec success");
        } else {
            res.status(403).json("Vous ne pouvez supprimer que votre publication");
        }
    } catch (err) {
        res.status(500).json(err);
    }
}
// like and dislike a post
module.exports.like = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post.likes.includes(req.body.userId)) {
            await post.updateOne({$push: {likes: req.body.userId}});
            res.status(200).json("Liké avec succes");
        } else {
            await post.updateOne({$pull: {likes: req.body.userId}});
            res.status(200).json("Disliké avec succes");
        }
    } catch (err) {
        res.status(500).json(err);
    }
}
// get single post info
module.exports.getPostInfo = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json(err);
    }
}
// timeline
module.exports.timeline = async (req, res) => {
    // return res.status(200).json(currentUser);
    try {
        const currentUser = await User.findById(req.params.userId);
        const userPosts = await Post.find({ userId: currentUser._id});
        const friendPosts = await Promise.all(
            currentUser.followings.map((friendId) => {
                return Post.find({ userId :friendId});
            })
        );
        res.status(200).json(userPosts.concat(...friendPosts));
    } catch (err) {
        res.status(500).json(err);
    }
}
// my own posts
module.exports.myposts = async (req, res) => {
    try {
        const user = await User.findOne({username: req.params.username});
        const posts = await Post.find({ userId: user._id});
        
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json(err);
    }
}
