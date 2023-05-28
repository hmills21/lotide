
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } for (let i = 0; i <= arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = function(object1, object2) {
  const objKeys1 = Object.keys(object1);
  const objKeys2 = Object.keys(object2);
  if (objKeys1.length !== objKeys2.length) {
    return false;
  }
  for (let item of objKeys1) {
    if (Array.isArray(object1[item]) && Array.isArray(object2[item])) {
      if (eqArrays(object1[item], object2[item]) !== true) {
        return false;
      }
    } else {
      if (object1[item] !== object2[item]) { // comparing the values of the keys of both objects
        return false;
      }
    }
  }


  return true;
};

const assertObjectsEqual = function(obj1, obj2) {
  const inspect = require('util').inspect;
  if (eqObjects(obj1, obj2)) {
    console.log(inspect(obj1) + " is equal to: " + inspect(obj2));
  } else {
    console.log(inspect(obj1) + " is not equal to: " + inspect(obj2));
  }
};

const objectOne = {size: "small", color: "pink" };
const objectTwo = {size: "medium", color: "red" };
assertObjectsEqual(objectOne, objectTwo);