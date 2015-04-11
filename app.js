var caesar = require('./caesar.js');

console.log("ABC encoded: " + caesar.encode("ABC", 2));
console.log("ABC encoded and decoded: " + 
            caesar.decode(caesar.encode("ABC", 2), 2));
