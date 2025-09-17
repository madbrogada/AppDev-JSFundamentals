// 🎯 Purpose: This program determines the larger of two numbers. 
// It uses the ternary operator to compare two values and returns 
// the greater one. This demonstrates a simple but essential 
// programming task: comparing values.
//
// 📚 Student Learning: By studying this script, students will:
// - Learn how to define and call functions with parameters.
// - Understand the use of the ternary operator (? :) for conditional logic.
// - Practice comparing numbers using relational operators (>).
// - Recognize how to return values from functions.
// - See how to store function results in variables and print them.

// Call the function 'max' with the numbers 5 and 3
// The result will be stored in the variable 'number'
let number = max(5, 3);

// Print the result in the console
console.log(number);  // Expected output: 5

// Define the function 'max' that takes two parameters: a and b
function max(a, b) {
  // Use the ternary operator (? :)
  // This checks if 'a' is greater than 'b'
  // If true → return 'a'
  // If false → return 'b'
  return (a > b) ? a : b;
}

