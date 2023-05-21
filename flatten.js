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

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log("assertion passed: array1 = array2");
  } else {
    console.log("assertion failed: array1 is not equal to array2");
  }
};

const flatten = function(arr) {
  const newArr = []; // new variable empty array
  for (let i of arr) { // first, we loop through the "main" array that contains values or nested arrays
    if (Array.isArray(i)) { // if when its looping through each element in the array it comes across
      //a nested array, then :
      for (let x of i) { // loop through that array too.
        newArr.push(x); // push those values in the nested arrays inside arr into the newArr variable
      }
    } else { // if its a value in the "main" array, just push it into the new array aswell
      newArr.push(i);
    }
  }
  return newArr;
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));