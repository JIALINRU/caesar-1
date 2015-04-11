var caesar = require('./caesar.js');

if (process.argv.length !== 5) {
  console.log('Usage: node app.js <string> <numberOfShifts> <encode|decode>');
  process.exit(1);
}

var method = caesar[process.argv[4]];
var numberOfShifts = parseInt(process.argv[3], 10);
var message = process.argv[2];

console.log(method(message, numberOfShifts));
