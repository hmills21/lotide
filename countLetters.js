const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(` 👍👍👍 Assertion Passed: ${actual} === ${expected}`);
  }   else if (actual !== expected) {
    console.log(` 🤡🤡🤡 Assertion Failed: ${actual}!== ${expected}`);
  }
};

/* const countLetters = function(string) {
  const result = [];
  for (let i = 0; i <= string.length; i++) {// looping through each letter in the string
       // Only count alphabetical characters
       if (/[a-zA-Z]/.test(string)) {
        // If we haven't seen the letter before, create a new property with a value of 1
        if (!result[string]) {
          result[string] = 1;
        } else {
          // If the letter already exists, increment its count
          result[string]++;
        }
      }
    
  return result
    }



} */

const countLetters = function(sentence) {
  //take a sentence as string
  //return a count of letters
   let obj = {}; //create an empty object
   //loop through letters
   const  result = sentence.split(" ").join("");
   // .split splits a string into substrings, which in this case is = sentence, then returns the new array.
   //.join method creates and returns a new string by concatenating all the elements
   //in an array(or an array-like object) seperated by commas or specified seperator string

   for (const letter of result){ // looping through each letter of my results
     if (obj[letter]){ //if the letter is come across more than once:
      obj[letter] += 1; // add 1 more to it 
     } else { //  if the loop only sees the letter once:
       obj[letter] = 1; // the letter is equal to 1
     }
   }
    return obj;// return the new obj object with the 

}
console.log(countLetters("Lighthouse in the house"));
