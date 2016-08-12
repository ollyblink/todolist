/**
 * Created by olzi on 11.08.2016.
 */
var express = require('express');
var passport = require('passport');
var Account = require('../models/account');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('register', {user: req.user});
});

router.post('/', function (req, res, next) {
    Account.register(new Account({username: req.body.username}), req.body.password,
        function (err, account) {
            if (err) {
                console.log(err.message);
                return res.render('register', {error: err.message});
            }

            passport.authenticate('local')(req, res, function () {
                req.session.save(function (err) {
                    if (err) {
                        return next(err);
                    }
                    res.redirect('/');
                });
            });
        });
});
module.exports = router; //NEVER FORGET or you get something like: TypeError: Router.use() requires middleware function but got a Object
