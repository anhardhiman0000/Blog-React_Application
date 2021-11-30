const userdata = require("../models/user");
const bcrypt = require('bcryptjs');
let userdetails = async (req, res, next) => {

    //GET
    try {
        let userd = await userdata.find();
        res.status(200).send({ success: true, userd });
    } catch (err) {
        console.log(err);
        res.status(400).send({ success: false, message: error.message });
    }
};

let createuser = async (req, res, next) => {
    //POST
    try {

        const { username, email, password } = req.body;
        const salt = await bcrypt.genSalt(10);
        const secpass = await bcrypt.hash(req.body.password, salt);

        console.log(secpass)

        let newuser = new userdata({ username: username, email: email, password: secpass });
        let result = await newuser.save();

        res.send("user created " + newuser);

    } catch (err) {
        console.log(err);
    }
};

//PUT
let updateuser = async (req, res, next) => {
    // code here
    try {
        let user = await userdata.findOne({ _id: req.query.id });
        if (user === null) {
            res.send("User does not exist");
        }
        else {
        }
        const salt = await bcrypt.genSalt(10);
        const secpass = await bcrypt.hash(req.body.password, salt);
        let updateuser = {
            username: req.body.username,
            email: req.body.email,
            password: secpass,
        };
        let result = await userdata.updateOne({ _id: req.query.id }, updateuser); res.send({ success: true, user: { id: req.query.id } });
    } catch (err) {
        console.log({ success: false, message: err.message });
    }

};

//DELETE
let deleteuser = async (request, response, next) => {
    console.log("ID = " + request.query.id);
    let user = await userdata.findOne({ _id: request.query.id });
    if (user === null) {
        response.send("User does not exist");
    } else {
        try {
            let result = await userdata.deleteOne({ _id: request.query.id });
            response.status(200).json({ success: true, id: request.query.id });
        } catch (error) {
            console.log(error);
        }
    }
};

//EXPORT
module.exports = { userdetails, createuser, updateuser, deleteuser };
