var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  response.send('<!DOCTYPE html><html><meta charset="UTF-8"><head><title>Carrom!!</title><body><b>Hello World!</b></body></html>');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
