var express = require('express');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

var app = express();

var movies = [
  {title: "12 Years A Slave"},
  {title: "Anchorman"}
]

app.get('/movies', function(req, res){
  res.status(200).json(movies);
});

app.post('/movies', jsonParser, function(req, res){
  movies.push(req.body);
  res.type('plain').send('Added!');
});

app.listen(1337);
