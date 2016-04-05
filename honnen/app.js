var fs = require('fs');

var datei = fs.readFileSync('../wolkenkratzer.json');

var string = datei.toString();

console.log(string);
