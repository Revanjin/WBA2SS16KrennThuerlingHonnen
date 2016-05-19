var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var serverPort = 3000;

var movies = [
  {name: '12 Years A Slave', rating: 8.1},
  {name: 'Anchorman', rating: 7.2}
]

app.get('/', function(req, res){
  res.status(200).json(movies[0].name);
});

app.get('/get', function(req, res){
  res.status(200).json(movies[1].name);
});

app.post('/post', function(req, res){
  console.log('Route /post aufgerufen');
});

app.listen(serverPort, function(){
  console.log('Server listen on port ' + serverPort + '.');
});
