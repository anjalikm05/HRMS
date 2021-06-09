const mongoose = require('mongoose');
const User = require('../models/users');

const bcrypt = require('bcrypt');

const Constants = require('../config/constants');


const register = async (req, res) => {
    const employeeIdExists = await User.findOne({
        employeeId: req.body.employeeId
    });
    if(employeeIdExists) {
        return res.status(Constants.er_failure).json("error");
    }

    const {employeeId, password} = req.body;

    try {
        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(password, salt, function(err, hash) {
                const user = User.create({
                    _id: new mongoose.Types.ObjectId(),
                    employeeId: employeeId,
                    password: hash
                });
            });
        });
        //const token =
    }
    catch {

    }   
}

const login = (req, res, next) => {
    const user = User.findOne({
        employeeId: req.body.employeeId
    });
    bcrypt.compare(req.body.password, user.password, function(err, result) {
        res.send('success');            
    });
}

module.exports.userControllerServices = {
    register,
    login
}