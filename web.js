var express = require('express');
var fs = require('fs');
var htmlfile = "index.html";

var app = express.createServer(express.logger());

//var buffer = new Buffer(256);
//buffer.write(fs.readFileSync('./index.html','utf8'));

//var buffer = new Buffer(buffer.write(fs.readFileSync('./index.html','utf8')));

var buffer = fs.readFileSync(htmlfile);

app.get('/', function(request, response) {
  response.send(buffer.toString('utf-8'));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
