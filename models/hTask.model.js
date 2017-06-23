var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var nTaskSchema = new Schema({
    "style": String,
    "alias": String,
    "theme": String,
    "sub": String,
    "slogan": String,
    "techs": String,
    "subject": String,
    "avatar": String,
    "name": String,
    "caption": String,
    "email": String,
    "youtubeEmbedLink": String,
    "presentation": String,
    "tags": Array,
    "next": String,
    "lang": String
});

var Htask = mongoose.model('Htask', nTaskSchema);

module.exports = Htask;
