var fs = require('fs');
var chalk = require('chalk');
var color = require('colors');

fs.readFile('../wolkenkratzer.json', function(err, data){
  if(err){
    console.log('Error: ' + err);
    return;
  }
  var objekt = JSON.parse(data);

  for(var i = 0; i < objekt.wolkenkratzer.length; i++){
    console.log('Name: '.rainbow + objekt.wolkenkratzer[i]['name'].rainbow);
    console.log(chalk.green('Stadt: ' + objekt.wolkenkratzer[i]['stadt']));
    console.log(chalk.red('Höhe: '  + objekt.wolkenkratzer[i]['hoehe'] + 'm'));
    console.log(chalk.white('--------------------'));
  }
});
