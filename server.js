var http = require('http');
var fs = require('fs');
var caesar = require('./caesar.js');

var server = http.createServer(function(request, response) {
  var transformStream;
  if (request.url === '/decode') {
    transformStream = caesar.createDecodeStream(2);
  } else if (request.url === '/encode') {
    transformStream = caesar.createEncodeStream(2);
  } else {
    transformStream = require('stream').PassThrough();
  }

  request
    .pipe(transformStream)
    .pipe(response);
});

server.listen(1337);
