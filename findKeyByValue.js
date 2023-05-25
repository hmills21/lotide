const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(` 👍👍👍 Assertion Passed: ${actual} === ${expected}`);
  }   else if (actual !== expected) {
    console.log(` 🤡🤡🤡 Assertion Failed: ${actual}!== ${expected}`);
  }
};

function findKeyByValue(object, value) {
  const allValues = Object.keys(object) // listing all the keys given by the object. sci_fi, 
  //comedy, drama
  for (let key of allValues) { // looping through each key of our variable allValues
    if (object[key] === value) { // if the object key is the same as the object value:
      return key; // return the key.
    }
  }
  return undefined;// if the value does not match a given key, return undefined
}


const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
// key:value