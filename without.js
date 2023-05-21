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

const without = function(source, itemsToRemove) {
  const newArr = [];

  for (let i of source) {
    if (itemsToRemove.includes(i) !== true) {
      newArr.push(i);
    }
  }
  
  return newArr;
};
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);