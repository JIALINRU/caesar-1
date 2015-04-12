var caesar = require('./caesar.js');
var fs = require('fs');

if (process.argv.length !== 4) {
  console.log('Usage: node app.js <filename> <numberOfShifts>');
  process.exit(1);
}

var numberOfShifts = parseInt(process.argv[3], 10);
var fileName = process.argv[2];

var caesarEncodeStream = caesar.createEncodeStream(numberOfShifts);
var caesarDecodeStream = caesar.createDecodeStream(numberOfShifts);
var fileStream = fs.createReadStream(fileName, { encoding: 'utf8' });

fileStream
  .pipe(caesarEncodeStream)
  .pipe(caesarDecodeStream)
  .pipe(process.stdout);
