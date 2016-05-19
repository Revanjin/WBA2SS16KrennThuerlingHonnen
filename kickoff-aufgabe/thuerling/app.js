var fs = require('fs');
var chalk = require('chalk');


fs.readFile('../wolkenkratzer.json', function(err, data){
  if(err) {
      console.log("Error" +err);
      return;
       };

  var objekt = JSON.parse(data);
  objekt.sort(sort_by('price', true, parseInt));

    console.log('_-¯-_-¯-_-¯-_-¯-_-¯-_-¯-_-¯-_-¯-_-¯-_-¯-_')
  for(var i=0; i<objekt.wolkenkratzer.length; i++){
    console.log(chalk.bgWhite.black('| Name: ' + objekt.wolkenkratzer[i]['name']));
    console.log(chalk.bgMagenta.yellow('| Stadt: ' + objekt.wolkenkratzer[i]['stadt']));
    console.log(chalk.bgCyan.gray('| Hoehe: ' + objekt.wolkenkratzer[i]['hoehe'] + 'm'));
    console.log('_-¯-_-¯-_-¯-_-¯-_-¯-_-¯-_-¯-_-¯-_-¯-_-¯-_')
  }
});
