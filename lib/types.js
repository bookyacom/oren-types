'use strict';

const assert  = require('assert');
const Checker = require('./checker');

const Any = function () {
  return new Checker();
};

const Boolean = function () {
  return new Checker(function (value) {
    if (typeof value === 'string') {
      if (value === 'true') value = 1;
      else if (value === 'false') value = 0;
      else value = parseInt(value, 10);

      assert(!isNaN(value));
    }

    if (typeof value !== 'number' && typeof value !== 'boolean') {
      throw new Error('value ' + value + ' must be either a string, a number or a boolean');
    }

    assert(value === true || value === false || value === 0 || value === 1);
  });
};

const Integer = function () {
  return new Checker(function (value) {
    const LOWERBOUND = -2147483648;
    const UPPERBOUND = 2147483647;

    if (typeof value === 'string') {
      value = parseInt(value, 10);
      assert(!isNaN(value));
    }

    assert(value >= LOWERBOUND && value <= UPPERBOUND);
  });
};

const Short = function () {
  return new Checker(function (value) {
    const LOWERBOUND = -32768;
    const UPPERBOUND = 32767;

    if (typeof value === 'string') {
      value = parseInt(value, 10);
      assert(!isNaN(value));
    }

    assert(value >= LOWERBOUND && value <= UPPERBOUND);
  });
};

const Types = {
  Any : Any,
  Boolean : Boolean,
  Integer : Integer,
  Short : Short
};

module.exports = Types;