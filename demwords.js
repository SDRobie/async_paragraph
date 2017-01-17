//get "the" "I" "like" "years" and output as an object

var fs = require('fs');

var the = /\sthe(\s|,|\.)/g;
var I = /\sI(\s|,|\.)/g;
var like = /\slike(\s|,|\.)/g;
var years = /\syears(\s|,|\.)/g;

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
    holster[regex] = str.match(regex).length;

    resolve(str);
  });
}

readPara(para)
    .then(function (data) {
        return wordSmith(data, the); })
    .then(function(data) {
        return wordSmith(data, I); })
    .then(function (data) {
        return wordSmith(data, like); })
    .then(function (data) {
        wordSmith(data, years);
        console.log(holster)})
    .catch(function(err){
      console.log(err);
  });
