var http = require('http');

var server = http.createServer(function(request, response) {
  response.end('Hello world');
});

server.listen(1337);
