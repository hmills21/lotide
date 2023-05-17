const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(` 👍👍👍 Assertion Passed: ${actual} === ${expected}`);
  }   else if (actual !== expected) {
    console.log(` 🤡🤡🤡 Assertion Failed: ${actual}!== ${expected}`);
  }
};

const tail = function(lastItems) {
  if (lastItems === []) {
    return [];
  } else if (lastItems.length === 1) {
    return [];
  }
  let words = [];
  for (let x = 1; x <= lastItems.length; x++) {
    words.push(lastItems[x]);
  }
  return words;
};
/*our assertEqual function is too simple to compare array values. javascript doesnt allow the
 use of === or == to compare two arrays.
 [1, 2, 3] === [1, 2, 3] // => false
 [1, 2, 3] == [1, 2, 3] // => false.
    therefore, we cannot expect this assertion to behave correctly:
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

    **** assertWqual function cant loop through arrays that have more than 1 value***/