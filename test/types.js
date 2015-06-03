'use strict';

/**
 * Usage documentation: 
 *
 *  db.vertex('account', {
 *    name   : Oren.Type.String().must(),
 *    email  : Oren.Type.String().check('email').must(),
 *    status : Oren.Type.Boolean().default(false)
 *  });
 *
 *  yield db.vertex.account.create({
 *    name : 'Ruben',
 *    email : 'not-an-email'    // this will throw an exception
 *    // status is not entered, but will default to "false"
 *  });
 *
 *  
 */

const assert = require('assert');
const debug  = require('debug');
const trace  = debug('trace');
const Types  = require('../lib/types');

describe('# utilities', function () {
  it('default()', function () {
    let test = Types.Any().default(1);
    assert(test.get() === 1);
  });

  it('check("email")', function () {
    let test = Types.Any().check('email');
    assert.throws(function () {
      test.set('not-an-email');
    });
    test.set('soggie@gmail.com');
  });

  it('must()', function () {
    let test = Types.Any().must();
    assert.throws(function () {
      test.get();
    });
  });
});

// describe('# Type.Boolean', function () {
//   let checker = Types.Boolean();

//   it('lessthan', function () {
//     checker.set(-1);
//   });

//   it('between', function () {
//     checker.set(true);
//     checker.set(false);
//     checker.set(0);
//     checker.set(1);
//   });

//   it('convert', function () {
//     checker.set('true');
//     checker.set('false');
//     checker.set('0');
//     checker.set('1');
//   });

//   it('morethan', function () {
//     checker.set(2);
//   });
// });

// describe('# Type.Integer');

// describe('# Type.Short');

// describe('# Type.Long');

// describe('# Type.Float');

// describe('# Type.Double');

// describe('# Type.Datetime');

// describe('# Type.String');

// describe('# Type.Binary');

// describe('# Type.Embedded');

// describe('# Type.EmbeddedList');

// describe('# Type.EmbeddedSet');

// describe('# Type.EmbeddedMap');

// describe('# Type.Link');

// describe('# Type.LinkList');

// describe('# Type.LinkSet');

// describe('# Type.LinkMap');

// describe('# Type.Byte');

// describe('# Type.Transient');

// describe('# Type.Date');

// describe('# Type.Decimal');

// describe('# Type.LinkBag');

// describe('# Type.Any');