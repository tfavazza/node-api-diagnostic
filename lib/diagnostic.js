// Write a function to sum the numbers in a file.
//
// This function should take the name of a plain text file with one number per
// line, as in data/integers.txt.
// It should add all the numbers and pass the result as the second argument to
// the callback provided. e.g `callback(null, sum);`.
//
// Blank lines should be ignored.
// However, if there is a line with non-numeric content (e.g. "oops"),
// an Error should be passed as the first argument to the callback provided,
// e.g. `callback(new Error('line not a number'));`
//

'use strict';

const fs = require('fs');

const sumLines = (filename, callback) => {
  fs.readFile(filename, { encoding: 'utf8' }, (err, lines) => {
    let lno = 0;
    let sum = lines.split('\n').reduce((prev, curr, i) => {
      lno = i;
      return prev + (+curr);
    }, 0);
    let error = isNaN(sum) && new Error(`line ${lno}: not a number`);
    callback(error, sum);
  });
};

const sumLinesOfArbitraryLengthFile = (filename, callback) => {
  const rl = require('readline');
  const rli = rl.createInterface({
    input: fs.createReadStream(filename),
  });
  let lno = 0;
  let sum = 0;
  rli.on('line', (line) => {
    lno++;
    sum += +line;
  });
  rli.on('close', () => {
    let error = isNaN(sum) && new Error(`line ${lno}: not a number`);
    callback(error, sum);
  });
};

module.exports = {
  sumLines,
  sumLinesOfArbitraryLengthFile,
};
