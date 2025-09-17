
try {
  const numbers = [1, 2, 3, 4]; 
  const count = countOccurrences(null, 1); 
  console.log(count); 
}
catch (e) {
  console.log(e.message);
}

function countOccurrences(array, searchElement) {
  if (!Array.isArray(array))
    throw new Error('Invalid array.');

  return array.reduce((accumulator, current) => {
    const occurrence = (current === searchElement) ? 1 : 0;
    return accumulator + occurrence;
  }, 0);
}// 🎯 Purpose: This program counts how many times a specific element appears in an array. 
// It uses error handling (try...catch) to ensure the first argument is a valid array. 
// If the input is invalid, it throws an error. Otherwise, it uses reduce() to calculate 
// the total number of occurrences of the given search element.
//
// 📚 Student Learning: By studying this script, students will:
// - Learn how to implement error handling in JavaScript using try...catch.
// - Understand how to validate inputs with Array.isArray() and throw errors when necessary.
// - Practice using the reduce() method to accumulate values from an array.
// - Apply conditional logic inside reduce to count matching elements.
// - Recognize the importance of defensive programming (handling invalid inputs gracefully).

try {
  // Create an array of numbers
  const numbers = [1, 2, 3, 4]; 
  
  // Call 'countOccurrences' with an invalid array (null) to trigger error handling
  const count = countOccurrences(null, 1); 
  
  // Print the result (this will be skipped if an error occurs)
  console.log(count); 
}
catch (e) {
  // If an error occurs, print the error message
  console.log(e.message);
}

// Define the function 'countOccurrences' with parameters: array, searchElement
function countOccurrences(array, searchElement) {
  // Validate if the input is an array
  if (!Array.isArray(array))
    throw new Error('Invalid array.');

  // Use reduce to count how many times searchElement appears in array
  return array.reduce((accumulator, current) => {
    // Check if current element matches the search element
    const occurrence = (current === searchElement) ? 1 : 0;
    // Add occurrence (1 or 0) to the accumulator
    return accumulator + occurrence;
  }, 0); // Initial value of accumulator is 0
}
