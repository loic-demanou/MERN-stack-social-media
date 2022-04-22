const User = require("../models/User");
const bcrypt = require('bcrypt');

module.exports.register = async (req, res) => {
    try {
        const {username, email, password} = req.body
        // generate new hashed password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // create new user
        const user = await new User({
            username: username,
            email: email,
            password: hashedPassword,
        })
        // save and respond
        await user.save();
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports.login = async (req, res) => {
    try {
        const user = await User.findOne({email: req.body.email});
        !user && res.status(404).json('User not found')

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        !validPassword && res.status(400).json('Wrong password')

        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err)
    }
}