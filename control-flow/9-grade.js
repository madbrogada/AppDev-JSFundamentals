// 🎯 Purpose: This program calculates the average of an array of marks 
// and determines the corresponding letter grade based on a grading scale.
// It uses a helper function to compute the average, then applies conditions 
// to return the correct grade (A–F).
//
// 📚 Student Learning: By studying this script, students will:
// - Learn how to pass arrays to functions and process their values.
// - Practice creating helper functions to keep code modular and organized.
// - Understand how to compute an average using loops and accumulation.
// - Apply conditional statements to map numeric scores into categories (grades).
// - Strengthen problem-solving skills by connecting logic with a real-world scenario. 

// Create an array of grades (marks) for a student
const array = [80, 80, 50]; 

// Grade scale:
// 0-59:  F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

// Call the function 'calculateGrade' with the marks array
// Print the returned grade in the console
console.log(calculateGrade(array));

// Define the function 'calculateGrade' with one parameter: marks
function calculateGrade(marks) {
  // First, compute the average of the marks using a helper function
  const average = calculateAverage(marks);

  // Decide the grade based on the average value
  if (average < 60) return 'F';   // if average is 0–59
  if (average < 70) return 'D';   // if average is 60–69
  if (average < 80) return 'C';   // if average is 70–79
  if (average < 90) return 'B';   // if average is 80–89
  return 'A';                     // if average is 90–100
}

// Helper function to calculate the average of numbers in an array
function calculateAverage(array) {
  // Start with a sum of 0
  let sum = 0; 

  // Use a for...of loop to add each value in the array to the sum
  for (let value of array)
    sum += value;

  // Divide the total sum by the number of elements to get the average
  return sum / array.length;
}
