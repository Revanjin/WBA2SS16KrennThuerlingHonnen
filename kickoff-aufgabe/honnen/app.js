var fs    = require('fs');
var chalk = require('chalk');
var color = require('colors');

fs.readFile('../wolkenkratzer.json', function(err, data){
  if(err){
    console.log('Error: ' + err);
    return;
  }

  var array = JSON.parse(data);

  array['wolkenkratzer'].sort(function(a, b){
    return a.hoehe - b.hoehe;
  });

  fs.writeFile( 'wolkenkratzer_sortiert.json', JSON.stringify(array, null, '\t'), function(err){
    if(err){
      throw error;
    }
    console.log("File saved!");
  });

  for(var i = 0; i < array.wolkenkratzer.length; i++){
    console.log('Name: '.rainbow + array.wolkenkratzer[i]['name'].rainbow);
    console.log(chalk.green('Stadt: ' + array.wolkenkratzer[i]['stadt']));
    console.log(chalk.red('Höhe: '  + array.wolkenkratzer[i]['hoehe'] + 'm'));
    console.log(chalk.white('--------------------'));
  }
});
