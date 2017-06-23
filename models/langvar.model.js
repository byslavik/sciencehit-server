var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var langvarSchema = new Schema({
    "key": String,
    "lang": String,
    "value": String
});

var LangVar = mongoose.model('LangVar', langvarSchema);

module.exports = LangVar;