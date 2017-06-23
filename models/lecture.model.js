var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var lectureSchema = new Schema({
    "style": String,
    "alias": String,
    "theme": String,
    "date": String,
    "subject": String,
    "avatar": String,
    "name": String,
    "caption": String,
    "email": String,
    "youtubeEmbedLink": String,
    "lection": String,
    "tags": Array,
    "next": String,
    "lang": String
});

var Lecture = mongoose.model('Lecture', lectureSchema);

module.exports = Lecture;