let args = process.argv.slice(2).toString();

String.prototype.splitBySeparators = function(separators) {
  // if (typeof this !== 'string') {
  //   throw new Error("Input must be a string");
  // }
  // if (!Array.isArray(separators)) {
  //   throw new Error("Separators must be an array of strings");
  // }

  var result = [];
  var current = "";
  var ch, sep;
  for (var i = 0; i < this.length; i++) {
    ch = this[i];
    for (var j = 0; j < separators.length; j++) {
      sep = separators[j];
      if (ch === sep) {
        result.push(current);
        current = "";
        break;
      }
    }
    current += ch;
  }
  result.push(current);

  return result.join('\n');
}

// Example usage
console.log(args.splitBySeparators([" ", "\t", "\n"])); 
