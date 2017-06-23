var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var speakerSchema = new Schema({
    theme: String,
    subject: String,
    sub: String,
    slogan: String,
    techs: String,
    avatar: String,
    name: String,
    youtubeEmbedLink: String,
    style: String,
    tour: String,
    lang: String
});

var Speaker = mongoose.model('Speaker', speakerSchema);

module.exports = Speaker;
