'use strict';

let validator = module.exports = {};
// const personRules = {
//   fields: {
//     id: {type: 'string', required: true},
//     name: {type: 'string', required: true},
//     age: {type: 'number', required: true},
//     children: { type: 'array', valueType: 'string' },
//   },
// };

/**
 * Based on a set of rules, is the input valid?
 * TODO: Define the rules ... how do we send them in? How do we identify?
 * @param input
 * @param rules
 * @returns {boolean}
 */
validator.isValid = (input, rules) => {
  return true;
};

/**
 * Is this a string?
 * @param input
 * @returns {boolean}
 */
validator.isString = (input) => {
  return typeof input === 'string';
};
// for the age 
/**
 * Is this a number?
 * @param input
 * @returns {number}
 */
validator.isValid = (input) =>{
  return typeof input === 'number' ;
}

/**
 * Is it array?
 * @param input
 * @returns {Array}
 */

validator.isArray = (input) =>{
  return typeof input === 'string';
}

