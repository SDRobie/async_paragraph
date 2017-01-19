//get "the" "I" "like" "years" and output as an object

var fs = require('fs');

var the = /the/g;
var I = /I/g;
var like = /like/g;
var years = /years/g;

var para = './paragraph.txt';
var holster = {};

function readPara (para) {
  return new Promise(function(resolve, reject){
  fs.readFile(para, 'utf8', function(err, data){
    if (err) throw err;
    resolve(data);
  });
});
}

function wordSmith(str, regex) {
  return new Promise(function(resolve, reject){
    resolve(str.match(regex).length);
  });
}
var paragraphContent;

readPara(para)
    .then(function (data) {
        paragraphContent = data;
        return wordSmith(paragraphContent, the); })
    .then(function(data) {
      holster.the = data;
        return wordSmith(paragraphContent, I); })
    .then(function (data) {
      holster.I = data;
        return wordSmith(paragraphContent, like); })
    .then(function (data) {
      holster.like = data;
        return wordSmith(paragraphContent, years); })
    .then(function (data) {
      holster.years = data;
      console.log(holster);
    })
    .catch(function(err){
      console.log(err);
  });
