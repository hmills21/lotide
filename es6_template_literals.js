/* also known as template literals, template strings.
its used to create normal string concatenation into fancier strings. example: */

//const name = "Alice";
//console.log('Hello, ' + name+ '!'); //logs: Hello, Alice!

// this example greets alice using the template literals syntax:

const girl = 'Alice';
console.log(`Hello, ${girl}!`); // logs: Hello, Alice!

/* the main difference here is that the string assigned to the variable name (that is, 
  'Alice') is interpolated (injected) directly into the final string. 
  since template strings are a special type of string, instead of using single or double
  quotes to declare them, we need to use back-ticks (`) */