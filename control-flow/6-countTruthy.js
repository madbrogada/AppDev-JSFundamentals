// 🎯 Purpose: This program counts how many "truthy" values exist in an array. 
// In JavaScript, values are either truthy or falsy. 
// Falsy values include: false, 0, null, undefined, NaN, and '' (empty string).
// All other values are truthy (e.g., non-zero numbers, non-empty strings, objects).
// The function 'countTruthy' checks each element of the array and returns 
// the total number of truthy values.
//
// 📚 Student Learning: By studying this script, students will:
// - Learn the difference between truthy and falsy values in JavaScript.
// - Practice using loops (for...of) to iterate through arrays.
// - Understand how implicit type conversion (truthy/falsy evaluation) works.
// - Develop problem-solving skills by filtering values based on conditions.
// - See how to build counters to keep track of specific conditions in arrays.

// Create an array with mixed values: numbers, null, undefined, empty string
const array = [0, null, undefined, '', 2, 3];

// Call the function 'countTruthy' with the array
// Print the result in the console
console.log(countTruthy(array));  // Expected output: 2

// Define the function 'countTruthy' with one parameter: array
function countTruthy(array) {
  // Start a counter at 0
  let count = 0; 

  // Use a for...of loop to go through each value in the array
  for (let value of array) 

    // In JavaScript, values are automatically converted to true/false
    // falsy values: false, 0, null, undefined, NaN, ''
    // truthy values: everything else (e.g. non-zero numbers, strings, objects)
    if (value)
      count++;   // If value is truthy, increase the counter by 1

  // Return the total number of truthy values
  return count; 
}

