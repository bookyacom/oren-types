'use strict';

const assert = require('assert');

class Validator {
  static email(value) {
    let validator = require('validate-email');
    assert(validator(value));
  }

  static must(value) {
    assert(value);
  }
}

class Checker {
  constructor(mainCheck) {
    this._value = null;
    this._gets  = [];
    this._sets  = [];

    if (typeof mainCheck === 'function') {
      this._sets.push(mainCheck);
    }
  }

  get() {
    let value = this._value;
    for (let check of this._gets) { check(value); }
    return value;
  }

  set(value) {
    for (let check of this._sets) { check(value); }
    this._value = value;
  }

  default(value) {
    this._value = value;
    return this;
  }

  must() {
    this._gets.push(Validator.must);
    return this;
  }

  check(algo) {
    if (Object.keys(Validator).indexOf(algo) === -1) {
      throw new Error(algo + ' is not a supported validation algorithm');
    } 

    this._sets.push(Validator[algo]);
    return this;  
  }
}

module.exports = Checker;