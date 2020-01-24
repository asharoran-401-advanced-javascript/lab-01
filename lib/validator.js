// eslint-disable-next-line strict
'use strict';

let validator = module.exports = {};
// const personRules = {
//   fields: {
//     id: { type: 'string', required: true },
//     name: { type: 'string', required: true },
//     age: { type: 'number', required: true },
//     children: { type: 'array', valueType: 'string' },
//   },
// };
// USE TDD Practices

/**
 * Based on a set of rules, is the input valid?
 * TODO: Define the rules ... how do we send them in? How do we identify?
 * @param input
 * @param rules
 * @returns {boolean}
 */
/**
 * Is this a string?
 * @param input
 * @returns {boolean}
 */
validator.isString = (input) => {
  return typeof input === 'string';
};
////////////// organize my solution after the review
validator.isNumber = (input) => {
  return typeof input === 'number';
};

validator.isArray = (input, valueType) => {
  // the array is an object
  // return typeof input === 'object'; ////////// My first Attempt /////////////////
  return Array.isArray(input) && (valueType ? input.every(val => typeof val === valueType) : true);
};

validator.isObject = (input) => {
  return input && typeof input === 'object';
};

validator.isBoolean = (input) => {
  return typeof input === 'boolean';
};

validator.isFunction = (input) => {
  return typeof input === 'function';
};
validator.isTruthy = (input) => {
  return !input;
};

///// From Mr.brain ////////
//// what happen if we have a coorect value for the type
validator.isCorrectType = (input, key) => {
  switch (key) {
  case 'string': return validator.isString(input);
  case 'number': return validator.isNumber(input);
  case 'array': return validator.isArray(input);
  case 'boolean': return validator.isBoolean(input);
  case 'object': return validator.isObject(input);
  default: return false;
  }
};

validator.isValid = (personRules, data) => {
  let valid = true;
  for (let fieldName in personRules.fields) {
    let field = personRules.fields[fieldName];
    // Am I required and set?
    let required = field.required ? validator.isTruthy(data[fieldName]) : true;
    // Am I the right type (if we even care)
    let type = field.type ? validator.isCorrectType(data[fieldName], field) : true;
    // If anything is false ...
    if (!(required && type)) {
      valid = false;
    }
  }
  return valid;
};

module.exports = validator;