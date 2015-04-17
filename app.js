var fs = require('fs');
var http = require('http');

var options = {
  server: 'localhost',
  port: 1337,
  method: 'POST'
};

var request = http.request(options, function(res) {
  res.pipe(process.stdout);
});

fs.createReadStream('message.txt')
  .pipe(request);
