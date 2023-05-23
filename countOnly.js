const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(` 👍👍👍 Assertion Passed: ${actual} === ${expected}`);
  }   else if (actual !== expected) {
    console.log(` 🤡🤡🤡 Assertion Failed: ${actual}!== ${expected}`);
  }
};

const countOnly = function(allItems, itemsToCount) {
  const results = {}

  /* for(const item of allItems) { // looping thorugh each item in allItems
    if (results[item]) { // this is a condition. you are accessing each item
      // and putting it into the empty variable results
      results[item] += 1;
    } else {
      results[item] = 1;
    }
    if (itemsToCount[item]) { 
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  } */
  for (const item of allItems) { //looping through each item in allItems
    if(itemsToCount[item]){ //if the items in itemsToCount is true
      if (results[item]) { // putting each item into results
        results[item] += 1; // if its true, add one for each time it appears.
      } else { // if it only appears once, than:
        results[item] = 1; // equal to 1
      }
    }
    // if it is false or doesnt appear at all, it will console.log undefined but it should be 
    //expected . look at the result1 down below.
  }
  return results;
}
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);