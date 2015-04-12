var http = require('http');
var fs = require('fs');
var caesar = require('./caesar.js');

var server = http.createServer(function(request, response) {
  request
    .pipe(caesar.createEncodeStream(2))
    .pipe(response);
});

server.listen(1337);
