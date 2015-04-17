var http = require('http');
var fs = require('fs');
var caesar = require('./caesar.js');
var cluster = require('cluster');
var numCPUs = require('os').cpus().length;
var requestsServed = 0;
var serverNum;

if (cluster.isMaster) {
  // Fork workers.
  for (var i = 0; i < numCPUs; i++) {
    cluster.fork({ serverNum: i });
  }
} else {
  serverNum = process.env.serverNum;
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
    console.log("Server: " + serverNum + ". Requests served: " + ++requestsServed);
  });
  server.listen(1337);
}

