
// 🎯 Purpose: This program determines whether a given dimension 
// (width and height) is in landscape orientation. 
// It returns true if the width is greater than the height, 
// otherwise it returns false (portrait or square).
//
// 📚 Student Learning: By studying this script, students will:
// - Understand how to use functions with multiple parameters.
// - Learn how to compare numeric values using relational operators (>).
// - Recognize the concept of Boolean outputs (true/false).
// - See a real-world application of logic: checking screen orientation.
// - Develop problem-solving skills by translating conditions into code.

// Call the function 'isLandscape' with width = 800 and height = 700
// The result (true or false) will be printed in the console
console.log(isLandscape(800, 700));

// Define the function 'isLandscape' with two parameters: width and height
function isLandscape(width, height) {
  // Check if the width is greater than the height
  // If true → return true (it is landscape)
  // If false → return false (it is not landscape, meaning portrait or square)
  return (width > height); 
}
