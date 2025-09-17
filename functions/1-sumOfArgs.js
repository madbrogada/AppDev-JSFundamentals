// 🎯 Purpose: This program calculates the sum of numbers using the rest operator (...). 
// It can accept either multiple individual numbers or a single array of numbers. 
// The function uses the reduce() method to add all the values together.
//
// 📚 Student Learning: By studying this script, students will:
// - Learn how to use the rest operator (...) to handle variable arguments in functions.
// - Understand how to detect whether the argument is an array using Array.isArray().
// - Practice applying the spread operator (...) to unpack array elements.
// - Gain experience with the reduce() method for accumulation operations.
// - Develop flexibility in designing functions that handle multiple input formats.

// Call the function 'sum' with an array of numbers [1, 2, 3, 4]
// Print the result in the console
console.log(sum([1, 2, 3, 4]));  // Expected output: 10

// Define the function 'sum' with rest parameter '...items'
function sum(...items) { 
  // If only one argument is passed AND it's an array,
  // unpack the array into individual items
  if (items.length === 1 && Array.isArray(items[0]))
    items = [...items[0]]; 

  // Use reduce to calculate the sum of all items
  return items.reduce((a, b) => a + b);
}
