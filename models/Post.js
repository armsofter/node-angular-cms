/**
 * Created by Armsofter on 7/14/2015.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
    Title: String,
    Autor: Number,
    Content: String,
    Activee: Boolean
});

module.exports = mongoose.model("Post",postSchema);