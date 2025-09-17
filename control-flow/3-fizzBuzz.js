
// 🎯 Purpose: This program implements the classic "FizzBuzz" problem. 
// It checks a given input and returns:
// - "FizzBuzz" if the number is divisible by both 3 and 5
// - "Fizz" if the number is divisible only by 3
// - "Buzz" if the number is divisible only by 5
// - The number itself if it is not divisible by 3 or 5
// If the input is not a number, it returns NaN (Not a Number).
//
// 📚 Student Learning: By studying this script, students will:
// - Understand how to use conditional statements (if, else if).
// - Learn the modulo operator (%) to check divisibility.
// - See how to combine multiple conditions with logical operators (&&, ||).
// - Practice handling invalid input with typeof checks.
// - Develop problem-solving skills by working with a classic coding exercise.
//
// ✅ This example strengthens both algorithmic thinking and practical coding skills.

// Call the function 'fizzBuzz' with the value 17
// Store the result in the variable 'output'
const output = fizzBuzz(17);

// Print the result in the console
console.log(output);  // Expected: 17

// Define the function 'fizzBuzz' with one parameter: input
function fizzBuzz(input) {
  
  // First, check if the input is NOT a number
  // typeof input !== 'number' → true if input is not a number
  // If so, return NaN (Not a Number)
  if (typeof input !== 'number')
    return NaN; 

  // Check if the number is divisible by BOTH 3 and 5
  if ((input % 3 === 0) && (input % 5 === 0))
    return 'FizzBuzz'; 

  // If only divisible by 3 → return "Fizz"
  if (input % 3 === 0)
    return 'Fizz'; 

  // If only divisible by 5 → return "Buzz"
  if (input % 5 === 0)
    return 'Buzz'; 

  // If none of the conditions are true → just return the number itself
  return input; 
}
