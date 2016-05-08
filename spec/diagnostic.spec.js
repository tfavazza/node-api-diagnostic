'use strict';

const diagnostic = require('../lib/diagnostic');

describe('Sum of lines in integers.txt', function () {
  it('should equal 88', function (done) {
    diagnostic.sumLines('data/integers.txt', function (error, sum) {
      if (error || sum !== 88) {
        error = error || new Error(`sum is ${sum}`);
      }

      done(error);
    });
  });
});

describe('Sum of lines in blanks.txt', function () {
  it('should equal 12', function (done) {
    diagnostic.sumLines('data/blanks.txt', function (error, sum) {
      if (error || sum !== 12) {
        error = error || new Error(`sum is ${sum}`);
      }

      done(error);
    });
  });
});

describe('Sum of lines in numbers.txt', function () {
  it('should equal 12.93', function (done) {
    diagnostic.sumLines('data/numbers.txt', function (error, sum) {
      if (error || sum !== 12.93) {
        error = error || new Error(`sum is ${sum}`);
      }

      done(error);
    });
  });
});

describe('Sum of lines in strings.txt', function () {
  it('should pass an error', function (done) {
    diagnostic.sumLines('data/strings.txt', function (error) {
      if (error instanceof Error) {
        return done();
      }

      done(new Error(`${error}`));
    });
  });
});
