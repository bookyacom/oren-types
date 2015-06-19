'use strict';

const assert  = require('assert');
const bignum  = require('bignum');
const Checker = require('./checker');

const Any = function () {
  return new Checker();
};

const Boolean = function () {
  return new Checker(function (value) {
    if (typeof value === 'string') {
      if (value === 'true') value = 1;
      else if (value === 'false') value = 0;
      else value = Number.parseInt(value, 10);

      assert(Number.isFinite(value));
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

    if (typeof value !== 'number' && typeof value !== 'string') {
      throw new Error('value ' + value + ' must be either a string or a number');
    }

    if (typeof value === 'string') {
      value = Number.parseInt(value, 10);
      assert(Number.isFinite(value));
    }

    assert(value >= LOWERBOUND && value <= UPPERBOUND);
  });
};

const Short = function () {
  return new Checker(function (value) {
    const LOWERBOUND = -32768;
    const UPPERBOUND = 32767;

    if (typeof value !== 'number' && typeof value !== 'string') {
      throw new Error('value ' + value + ' must be either a string or a number');
    }

    if (typeof value === 'string') {
      value = Number.parseInt(value, 10);
      assert(Number.isFinite(value));
    }

    assert(value >= LOWERBOUND && value <= UPPERBOUND);
  });
};

const Long = function () {
  return new Checker(function (value) {
    const LOWERBOUND = bignum('-9223372036854775808');
    const UPPERBOUND = bignum('9223372036854775807');

    if (typeof value === 'number') {
      value = '' + value;
    }

    if (typeof value !== 'string') {
      throw new Error('value ' + value + ' must be a string');
    }

    assert(LOWERBOUND.le(value) && UPPERBOUND.ge(value));
  });
};

const Float = function () {
  // return new Checker(function (value) {
  //   const LOWERBOUND = -340282350000000000000000000000000000000;
  //   const UPPERBOUND = 340282350000000000000000000000000000000;

  //   if (typeof value !== 'number' && typeof value !== 'string') {
  //     throw new Error('value ' + value + ' must be either a string or a number');
  //   }

  //   if (typeof value === 'string') {
  //     value = Number.parseFloat(value, 10);
  //     assert(Number.isFinite(value));
  //   }

  //   console.log(value, LOWERBOUND);

  //   assert(value >= LOWERBOUND && value <= UPPERBOUND);
  // });
};

const String = function () {
  return new Checker(function (value) {
    assert(typeof value === 'string');
  });
};

const Types = {
  Any     : Any,
  Boolean : Boolean,
  Integer : Integer,
  Short   : Short,
  Long    : Long,
  Float   : Float,
  String  : String
};

module.exports = Types;