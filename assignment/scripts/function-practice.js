console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display tuhe result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name1) {
  return 'Hello ' + name1 + '!';

}
console.log('2nd question', helloName('stacy'));
// Remember to call the function to test


// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {

  return firstNumber + secondNumber;
}
console.log('3rd', addNumbers(8, 5));

// 4. Function to multiply three numbers & return the result
function multiplyThree(num0, num1, num2) {
  return num0 * num1 * num2;

}
console.log('4th', multiplyThree(8, 8, 8));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  let zero = 0;
  if (number > zero) {
    return true
  }
  else {
    return false
  }
}
console.log('5th', isPositive(-9));
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log('isPositive - should say true', isPositive(3));
console.log('isPositive - should say false', isPositive(0));
console.log('isPositive - should say false', isPositive(-3));


// 6. Function to return the _last_ item in an array. If the array is empty, return `undefined`.
function getLast(array) {
  return array[array.length - 1];
}
console.log('6th', getLast([]));


// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 

function find(value, array) {
  for (i = 0; i < array.length; i++) {

    if (value === array[i]) {
      return true;
    }
  }
  return false;

}
console.log('question 7', find(4, [2, 4, 6]));

// ----------------------


// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

  for (i = 0; i < string.length; i++) {
    let array = [];
    if (letter = string[0]) {
      return true;
    }
    else {
      return false;
    }
  }
}
console.log('line 182', isFirstLetter('k', 'hello'));


console.log('isFirstLetter - should say true', isFirstLetter('a', 'apple'));
console.log('isFirstLetter - should say false', isFirstLetter('z', 'apple'));

// 9. Function to return the sum of all numbers in an array
function sumAll() {
  let sum = 0
  // TODO: loop to add items

}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
