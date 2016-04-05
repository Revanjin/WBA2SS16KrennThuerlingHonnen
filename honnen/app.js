var fs = require('fs');

fs.readFile('../wolkenkratzer.json', function(err, data){
  if(err) throw err;
  var bigString = JSON.stringify(data.toString());
  var array = bigString.split("\\n");
  console.log(array);
});
