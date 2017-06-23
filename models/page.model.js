var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pageSchema = new Schema({
    "name" : String,
    "type" : String,
    "alias" : String,
    "videoEmbedLink" : String,
    "report" : Object,
    "headerTitle" : String,
    "registration" : Object,
    "isFinished" : Boolean,
    "trainers" : Object,
    "music" : Object,
    "lang" : String,
    "about" : Object,
    "founders" : Object,
    "additional": Object
});

var Page = mongoose.model('Page', pageSchema);

module.exports = Page;
