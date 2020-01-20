'use strict';
const faker = require('faker');
const validator = require('../lib/validator.js');
///// we get the idea from review ////
let str = 'yes';
let num = 1;
let arr = ['a'];
let obj = {x:'y'};
let func = () => {};
let bool = false;

// const personRules = {
//   fields: {
//     id: {type: 'string', required: true},
//     name: {type: 'string', required: true},
//     age: {type: 'number', required: true},
//     children: { type: 'array', valueType: 'string' },
//   },
// };
describe('validator module performs basic validation of', () => {

  // TODO: Make this series of tests less repetitive ... DRY it out
  /// we need to check the data if it string then give the string argumint truth and the other varible is false 
    it('strings', () => {
  expect(validator.isString(str)).toBeTruthy();
  expect(validator.isString(num)).toBeFalsy();
  expect(validator.isString(arr)).toBeFalsy();
  expect(validator.isString(obj)).toBeFalsy();
  expect(validator.isString(func)).toBeFalsy();
  expect(validator.isString(bool)).toBeFalsy();
});
  /// we need to check the data if it number then give the number argumint truth and the other varible is false 
  it(' allow numbers' , () =>{
  expect(validator.isNumber(str)).toBeFalsy();
  expect(validator.isNumber(num)).toBeTruthy()
  expect(validator.isNumber(arr)).toBeFalsy();
  expect(validator.isNumber(obj)).toBeFalsy();
  expect(validator.isNumber(func)).toBeFalsy();
  expect(validator.isNumber(bool)).toBeFalsy();
  });
  
    /// we need to check the data if it object then give the object argumint truth and the other varible is false 
  it('allow objects' , () =>{
    expect(validator.isObject(str)).toBeFalsy();
    expect(validator.isObject(num)).toBeFalsy();
    expect(validator.isObject(arr)).toBeFalsy();
    expect(validator.isObject(obj)).toBeTruthy();
    expect(validator.isObject(func)).toBeFalsy();
    expect(validator.isObject(bool)).toBeFalsy();
  });
    /// we need to check the data if it object then give the object argumint truth and the other varible is false 
  it('allow booleans' , () =>{
    expect(validator.isBoolean(str)).toBeFalsy();
    expect(validator.isBoolean(num)).toBeFalsy();
    expect(validator.isBoolean(arr)).toBeFalsy();
    expect(validator.isBoolean(obj)).toBeFalsy();
    expect(validator.isBoolean(func)).toBeFalsy();
    expect(validator.isBoolean(bool)).toBeTruthy();
  });
    /// we need to check the data if it function then give the function argumint truth and the other varible is false 
  it('allow functions' , () =>{
    expect(validator.isBoolean(str)).toBeFalsy();
    expect(validator.isBoolean(num)).toBeFalsy();
    expect(validator.isBoolean(arr)).toBeFalsy();
    expect(validator.isBoolean(obj)).toBeFalsy();
    expect(validator.isBoolean(func)).toBeTruthy();
    expect(validator.isBoolean(bool)).toBeFalsy();
  });
      /// we need to check the data if it array then give the array argumint truth and the other varible is false 
   it('allow arrays' , ()=>{
      expect(validator.isArray(str)).toBeFalsy();
      expect(validator.isArray(num)).toBeFalsy();
      expect(validator.isArray(arr)).toBeFalsy();
      expect(validator.isArray(obj)).toBeTruthy()
      expect(validator.isArray(func)).toBeFalsy();
      expect(validator.isArray(bool)).toBeFalsy();
  });
  //// we need to put the arr type 
  it('arrays of type' , () =>{
    let numArray = [1,2,3];
    let strArray = ['a' , 'b' , 'c'];

    expect(validator.isArray(str)).toBeFalsy();
    expect(validator.isArray(num)).toBeFalsy();
    expect(validator.isArray(arr)).toBeFalsy();
    //// we need to expect the numArr and strArr
    expect(validator.isArray(numArray , 'number')).toBeTruthy();
    expect(validator.isArray(numArray , 'string')).toBeFalsy();
    expect(validator.isArray(strArray , 'number')).toBeFalsy();
    expect(validator.isArray(strArray , 'string')).toBeTruthy();
    expect(validator.isArray(obj)).toBeTruthy()
    expect(validator.isArray(func)).toBeFalsy();
    expect(validator.isArray(bool)).toBeFalsy();
  })
});



// describe('validator module performs complex validations', () => {

//   it('validates the presence of required object properties at any level', () => {
//     // i.e. does person.hair.color exist and have a good value, not just person.hair
//     expect(true).toBeFalsy();
//   });

//   it('validates the proper types of object properties', () => {
//     // i.e. person.name must be a string, etc.
//     expect(true).toBeFalsy();
//   });

//   it('validates the types of values contained in an array', () => {
//     // i.e. an array of all strings or numbers
//     expect(true).toBeFalsy();
//   });

//   it('validates a value array against an approved list', () => {
//     // i.e. a string might only be allowed to be "yes" or "no"
//     expect(true).toBeFalsy();
//   });

  // TODO: Cover so, so many more cases

// });

