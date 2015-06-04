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

const Types = {
  Any : Any,
  Boolean : Boolean
};

module.exports = Types;