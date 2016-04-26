var fs = require('fs');

fs.readFile('../wolkenkratzer.json', function(err, data){
  if(err){
    console.log('Error: ' + err);
    return;
  }
  var string = JSON.parse(data);
  console.log(string);
});
