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
  let newNumArray = [];
  fs.readFile(filename, {
    encoding: 'utf8'
  }, (error, numbers) => {if (error) {
      console.error(error.stack);
      return;
    }
    let numArray = numbers.split('\n');
    numArray.forEach((num) => {
      newNumArray = parseInt(num, 10);
    });
  let sum;
  for (let i=0; i<newNumArray.length -1 ; i++) {
    sum += newNumArray[i] + newNumArray[i+1];
  }
    return sum;
  });
};
module.exports = {
  sumLines,
};
