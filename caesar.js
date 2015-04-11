function shift(value, numberOfShifts) {
  var ret = '';
  // Loop over string and shift each character
  value.split('').forEach(function(character) {
    var charCode = character.charCodeAt() - 65;
    // Only treat uppercase english letters...
    if (charCode >= 0 && charCode < 27) {
      var shiftedCharCode = (charCode + 26 + numberOfShifts) % 26;
      ret += String.fromCharCode(shiftedCharCode + 65);
    } else {
      ret += character;
    }
  });
  return ret;
}

exports.encode = function(value, numberOfShifts) {
  return shift(value, numberOfShifts);
};

exports.decode = function(value, numberOfShifts) {
  return shift(value, numberOfShifts * -1);
}
