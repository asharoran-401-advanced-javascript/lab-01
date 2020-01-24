// eslint-disable-next-line strict
'use strict';

const validator = require('./lib/validator.js');
console.log('string ():' , validator.isString);
console.log('number():' , validator.isNumber);
console.log( 'array():' , validator.isArray);
console.log( 'object():' , validator.isObject);
console.log( 'boolean():' , validator.isBoolean);
console.log( 'function():' , validator.isFunction);
