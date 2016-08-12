/**
 * Created by olzi on 11.08.2016.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ToDo = new Schema({
    title: String,
    description: String,
    urgency: Number
});

module.exports = mongoose.model('todos', ToDo);