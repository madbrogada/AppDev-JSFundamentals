
// 🎯 Purpose: This program prints a pattern of stars (*) in increasing rows. 
// The number of rows is based on the input value. Each new row contains one 
// more star than the previous row. This is a classic problem used to practice 
// nested loops and pattern generation.
//
// 📚 Student Learning: By studying this script, students will:
// - Understand how to use nested loops (a loop inside another loop).
// - Learn how to build strings dynamically by concatenating characters.
// - Practice controlling repetition using loop counters (row and column).
// - Develop logical thinking by translating patterns into program code.
// - Gain experience with console output for visualizing loop behavior.

// Call the function 'showStars' with the value 2
// This means the program will print 2 rows of stars
showStars(2);

// Define the function 'showStars' with one parameter: rows
function showStars(rows) {
  // Outer loop: controls the number of rows
  for (let row = 1; row <= rows; row++) {
    // Start with an empty string for each row
    let pattern = '';

    // Inner loop: controls how many stars are added per row
    for (let i = 0; i < row; i++)
      pattern += '*';  // Add one star to the pattern string

    // Print the completed pattern for this row
    console.log(pattern);
  }
}
