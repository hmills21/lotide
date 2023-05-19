const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(` 👍👍👍 Assertion Passed: ${actual} === ${expected}`);
  }   else if (actual !== expected) {
    console.log(` 🤡🤡🤡 Assertion Failed: ${actual}!== ${expected}`);
  }
}; 
// these two functions go hand in hand! you use the assertEqual function to use it for this function
const eqArrays = function(arr1, arr2) {
if (arr1.length !== arr2.length) {
  return false
}for (let i = 0; i <= arr1.length; i++) {
  if(arr1[i] !== arr2[i]) {
    return false
  } 
}
return true
}
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);