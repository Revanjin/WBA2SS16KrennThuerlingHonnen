var fs = require('fs');

fs.readFile('../wolkenkratzer.json', function(err, data){
  if(err){
    console.log('Error: ' + err);
    return;
  }
  var objekt = JSON.parse(data);

  for(var i = 0; i < objekt.wolkenkratzer.length; i++){
    console.log('Name: '  + objekt.wolkenkratzer[i]['name']);
    console.log('Stadt: ' + objekt.wolkenkratzer[i]['stadt']);
    console.log('Höhe: '  + objekt.wolkenkratzer[i]['hoehe'] + 'm');
    console.log('--------------------');
  }
});
