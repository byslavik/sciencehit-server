var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var slideSchema = new Schema({
  "img": String,
  "descr": String,
  "sliderId": Number,
  "lang": String
});

var Slide = mongoose.model('Slide', slideSchema);

module.exports = Slide;
