// 🎯 Purpose: This program displays numbers from 0 up to a given limit 
// and indicates whether each number is EVEN or ODD. 
// It uses a for loop to iterate through numbers and the modulo operator (%) 
// with a ternary operator to determine if a number is even or odd.  
//
// 📚 Student Learning: By studying this script, students will:
// - Understand how to use a for loop to repeat tasks within a range.
// - Learn to apply the modulo operator (%) to check divisibility.
// - Practice using the ternary operator (? :) for conditional logic.
// - Differentiate between even and odd numbers programmatically.
// - Develop skills in combining iteration, condition checking, 
//   and output printing for problem-solving.

// Call the function 'showNumbers' with the value 10
// This means we want to display numbers from 0 up to 10
showNumbers(10);

// Define the function 'showNumbers' with one parameter: limit
function showNumbers(limit) {
  
  // Use a for loop to start from 0 and go up to the limit (inclusive)
  // i starts at 0, and increases by 1 each loop (i++)
  for (let i = 0; i <= limit; i++) {

    // Use the ternary operator (? :)
    // Check if the number (i) is divisible by 2
    // If true → message = "EVEN"
    // If false → message = "ODD"
    const message = (i % 2 === 0) ? 'EVEN' : 'ODD';

    // Print the number and whether it’s EVEN or ODD
    console.log(i, message);
  }
}
