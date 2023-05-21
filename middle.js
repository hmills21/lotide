const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log("assertion passed: array1 = array2");
  } else {
    console.log("assertion failed: array1 is not equal to array2");
  }
};

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

  const middle = function (arr) {
    if(arr.length <= 2) {
      return []; // if the length is 1 or 2, return an empty array
    } 
    if (arr.length % 2 === 0) { // if the legnth is an even  number:
      return [arr.length / 2, (arr.length / 2) + 1]; // return the 2 most middle values. if it was 8
      // it would be 8/2 = 4 and 8/2 + 1 = 5. 4 and 5 are the 2 most middle values.
    }
    else if (arr.length % 2 !== 0) { // if the array length is an odd number:
      return[Math.round(arr.length / 2)]; // return the middle number in the array. if it was 7,
      // 7/2 = 3.5. math.round will round up 3.5 to 4 which is the middle number between 7.
    }
  };
  console.log(middle([1, 2, 3 ])) // => [2, ]
  console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]