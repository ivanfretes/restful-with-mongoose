const express = require('express');
const router = express.Router();

// Calling the user model module
var UserModel = require('../models/user-model');



// CREATES A NEW USER
router.post('/', function (req, res, next) {
    UserModel.create({
        name : req.body.name,
        email : req.body.email,
        password : req.body.password
    }, 
    function (err, user) {
        if (err) return res.status(500).send("There was a problem adding the information to the database.");
        res.status(200).send(user);
    });
});


// RETURNS ALL USERS IN THE DATABASE
router.get('/', function (req, res) {
    UserModel.find({}, function (err, users) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(users);
    });
});


// RETURNS USERS BY ID IN THE DATABASE
router.get('/:id', function(req, res) {
    UserModel.findById(req.params.id, function(err, user) {
        if (err) res.send(err);
        res.json(user);
    });
});


// UPDATES A SINGLE USER IN THE DATABASE
router.put('/:id', function (req, res) {
    UserModel.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, user) {
        if (err) return res.status(500).send("There was a problem updating the user.");
        res.status(200).send(user);
    });
});
  
// DELETES A USER FROM THE DATABASE
router.delete('/:id', function (req, res) {
    UserModel.findByIdAndRemove(req.params.id, function (err, user) {
        if (err) return res.status(500).send("There was a problem deleting the user.");
        res.status(200).send("User "+ user.name +" was deleted.");
    });
});

module.exports = router;