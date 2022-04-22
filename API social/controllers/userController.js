const bcrypt = require('bcrypt');
const User = require('../models/User');


// get all users
module.exports.getAllUsers = async (req, res) => {
    const users = await User.find().select('-password');
    res.status(200).json(users);
}

// update user
module.exports.updateUsers = async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        if (req.body.password) {
            try {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
            } catch (err) {
                return res.status(500).json(err);
            }
        }
        try {
            const user = await User.findByIdAndUpdate(req.params.id, { 
                $set: req.body,
            });
            res.status(200).json("Compte édité avec success !");
        } catch (err) {
            return res.status(500).json(err);
        }
    } else {
        return res.status(403).json("Vous pouvez modifier uniquement vous propres infos");
    }
}

// delete user
module.exports.deleteUser = async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        try {
            const user = await User.findByIdAndDelete(req.params.id);
            res.status(200).json("Compte supprimé avec success !");
        } catch (err) {
            return res.status(500).json(err);
        }
    } else {
        return res.status(403).json("Vous pouvez supprimer uniquement votre compte");
    }
}
// Get single user info
module.exports.userInfo = async (req, res) => {
        try {
            const user = await User.findById(req.params.id);
            const {password, updatedAt, ...other} = user._doc
            res.status(200).json(other);
        } catch (err) {
            return res.status(500).json(err);
        }
    
}
// follow user
module.exports.follow = async (req, res) => {
    if (req.body.userId !== req.params.id) {
        try {
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            if (!user.followers.includes(req.body.userId)) {
                await user.updateOne({$push: {followers: req.body.userId}});
                await currentUser.updateOne({$push: {followings: req.params.id}});
                res.status(200).json("Utilisateur suivi");
            } else {
                res.status(400).json("Deja suivi");
            }
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("Vous ne pouvez pas vous suivre");
    }
}
// unfollow user
module.exports.unfollow = async (req, res) => {
    if (req.body.userId !== req.params.id) {
        try {
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            if (user.followers.includes(req.body.userId)) {
                await user.updateOne({$pull: {followers: req.body.userId}});
                await currentUser.updateOne({$pull: {followings: req.params.id}});
                res.status(200).json("Utilisateur abandonné");
            } else {
                res.status(400).json("Deja unfollow");
            }
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("Vous ne pouvez pas vous unfollow");
    }
}