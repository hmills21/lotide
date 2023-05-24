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

const letterPositions = function(sentence) {
  const results = {}; // new empty object variable to place the results inside
  const  result = sentence.split(" ").join(""); // we have to split and then join back all the
  //lettters without spaces to get the correct indexs
for (let i = 0; i < sentence.length; i++) { // looping through each letter in the string
  if(sentence[i] in results) { // if the index in the sentence is already present in results:
    results[sentence[i]].push(i);// then push the index in sentence into results
  } else { // if its not already present:
    results[sentence[i]] = [i] // then the index is equal to sentence[i] 
  }
}
return results // return the results
}
console.log(letterPositions("hello"));

// answer: { h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ] };