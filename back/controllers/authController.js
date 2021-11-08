const User = require('../models/User');
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");


exports.signup = (req, res) => {
    console.log("req.body", req.body);
    const user = new User(req.body);
    user.save((error, user) => {
        console.log("Reached signup endpoint")
        if(error) {
            return res.status(400).json({
                message: "Error, check fields"
            })
        }
        // We will see the user on the response (res.json), without salt and password
        user.salt = undefined;
        user.hashed_password = undefined;
        res.json({
            user
        })
    })
}

exports.login = (req, res) => {
    // Destructure body
    const {email, password} = req.body
    // Search on db, one user with specific email
    User.findOne({email}, (error, user) => {
        if(error || !user) {
            return res.status(400).json({
                message: "User doesn't exists"
            });
        }
        // If user found, password should match with db password
        if(!user.authenticate(password)) {
            return res.status(401).json({
                error: "Email and password don't match, try again."
            });
        }
        // If not errors, creating token of jwt type using user id
        const token = jwt.sign({_id:user._id}, process.env.JWT_SECRET)
        // Create cookie session, during + xxxx time
        res.cookie('t', token, {expire: new Date() + 0})
        const {_id, name, email, role} = user
        return res.json({token, user: {_id, email, name, role}})
    });
}

exports.logout = (req, res) => {
    res.clearCookie('t')
    res.json({message: "Signout success"});
};

exports.userById = (req, res, next, id) => {
    User.findById(id).exec((err,user) => {
        if(err||!user) {
            return res.status(400).json({
                error: "Usuario no encontrado"
            });
        }
        req.profile = user;
        next()
    });
}