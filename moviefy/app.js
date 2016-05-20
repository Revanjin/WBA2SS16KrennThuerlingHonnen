var express = require('express');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

var app = express();
var serverPort = 3000;

var movies = [
  {title: "12 Years A Slave"},
  {title: "Anchorman"}
]

app.get('/', function(req, res){
  var acceptedTypes = req.accepts(['html', 'json']);
  switch (acceptedTypes) {
    case 'html':
      res.type('html').send('<h1>Hello World in HTML</h1>');
      break;
    case 'json':
      res.json({content: 'Hello World in JSON'});
      break;
    default:
      res.status(406).end();
  }
});

app.get('/movies', function(req, res){
  res.status(200).json(movies);
});

app.post('/movies', jsonParser, function(req, res){
  movies.push(req.body);
  res.type('plain').send('Added!');
});

app.listen(serverPort, function(){
  console.log('Server listening on Port ' + serverPort + '.');
});
