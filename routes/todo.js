/**
 * Created by olzi on 11.08.2016.
 */
var express = require('express');
var passport = require('passport');
var ToDo = require('../models/todo');
var router = express.Router();

router.get('/', function (req, res) {
    if(req.user){
        res.render('todo', {user: req.user});
    }else{
        res.redirect('/');
    }
});

router.post('/', function (req, res, next) {
    var newTodo = new ToDo({title: req.title, description: req.description, priority: req.priority});
    newTodo.save(function (err) {
        if (err) return console.error(err);
        else {
            console.log("Saved new todo with title " + req.title);
            res.redirect('/');
        }
    });
});
module.exports = router; //NEVER FORGET or you get something like: TypeError: Router.use() requires middleware function but got a Object
