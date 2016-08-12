/**
 * Created by olzi on 11.08.2016.
 */
var express = require('express');
var passport = require('passport');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('index', {user: req.user});
});

router.get('/login', function (req, res) {
    res.render('login', {user: req.user, error: req.flash('error')});
});

router.post('/login', passport.authenticate('local', {
    failureRedirect: '/login',
    failureFlash: true
}), function (req, res, next) {
    req.session.save(function (err) {
        if (err) {
            return next(err);
        }
        res.redirect('/');
    });
});

router.get('/logout', function (req, res, next) {
    req.logout();
    req.session.save(function (err) {
        if (err) {
            return next(err);
        }
        res.redirect('/');
    });
});


module.exports = router;
