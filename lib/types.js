'use strict';

const Checker = require('./checker');

const Any = function () {
  return new Checker();
};

const Types = {
  Any : Any
};

module.exports = Types;