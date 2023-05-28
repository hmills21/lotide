const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }for (let i = 0; i <= arr1.length; i++) {
    if(arr1[i] !== arr2[i]) {
      return false;
    } 
  }
  return true;
}

  const assertArraysEqual = function(array1, array2) {
    if (eqArrays(array1, array2)) {
      console.log("assertion passed: array1 = array2");
    } else {
      console.log("assertion failed: array1 is not equal to array2");
    }
  };

const results1 = map(words, word => word[0]);
const results2 = map(words, function(item) {
  return item = 1;
});
console.log(results1);
console.log(results2)
assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(results2, [1,1,1,1,1])