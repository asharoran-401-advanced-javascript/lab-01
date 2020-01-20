'use strict';

const validator = require('./lib/validator.js');

validator.isValid();

console.log('string ():' , validator.isString);
console.log('number():' , validator.isNum);
console.log( 'array():' , validator.isArray);
console.log( 'object():' , validator.isObject);
console.log( 'boolean():' , validator.isBoolean);
console.log( 'function():' , validator.isFunction)
