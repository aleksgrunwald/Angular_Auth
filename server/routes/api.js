const dbPasses = require('../pass.js')

const express = require('express');
const router = express.Router();
const User = require('../models/user');
const mongoose = require('mongoose');

const db = "mongodb://angularAuth:NgAuthTut1.mlab.com:41847/events";

mongoose.connect(db, err => {
    if (err) {
        console.error('Error connecting: ' + err)
    } else {
        console.log('Connected to db')
    }}
);

router.get('/', (req, res) => {
    res.send('From API route')
});

router.post('/register', (req, res) => {
    let userData = req.body
    let user = new User(userData)
    user.save((err, registerUser) => {
        if (err) {
            console.error('Error saving user to db' + err)
        } else {
            res.status(200).send(registerUser)
        }
    });
})

module.exports = router;