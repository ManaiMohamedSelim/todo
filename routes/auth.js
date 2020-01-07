var express = require('express');
var router = express.Router();
var User = require('../models/user');
var app = express();

/* GET home page. */

module.exports = function (passport) {
    router.put('/user/:id', function (req, res) {
        User.findByIdAndUpdate(
            // the id of the item to find
            req.params.id,

            // the change to be made. Mongoose will smartly combine your existing
            // document with this change, which allows for partial updates too
            req.body,

            // an option that asks mongoose to return the updated version
            // of the document instead of the pre-updated one.
            {new: true},

            // the callback function
            (err, user) => {
                // Handle any possible database errors
                if (err) return res.status(500).send(err);
                return res.send(user);
            }
        )
    })
    router.post('/signup', function (req, res, next) {
        var body = req.body;
        var username = body.username;
        var password = body.password;
        var email = body.email;
        User.findOne({username: username}, function (err, doc) {
            if (err) {
                res.status(500).send('error occured');
            } else {
                if (doc) {
                    res.status(400).send({message: 'username ' + username + ' is already taken'});
                } else {

                    var record = new User();
                    record.username = username;
                    record.password = record.hashPassword(password);
                    record.email = email;

                    record.save(function (err, user) {
                        if (err) {
                            res.status(500).send('db error');
                        } else {
                            res.send(user);
                        }
                    })

                }
            }
        })
    });

    router.post('/login', passport.authenticate('local', {}), function (req, res) {
        console.log(res);
        res.send(req.session.passport)
    });

    return router;
};
