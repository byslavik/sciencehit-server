var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articleSchema = new Schema({
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
    "speakers": Array,
    "next": String,
    "lang": String
});

var Article = mongoose.model('Article', articleSchema);

module.exports = Article;