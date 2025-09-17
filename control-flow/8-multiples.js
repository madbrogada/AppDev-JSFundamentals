// 🎯 Purpose: This program calculates the sum of all numbers up to a given limit 
// that are divisible by 3 or 5. (Classic multiples problem)
//
// 📚 Student Learning: By studying this script, students will:
// - Understand how to use loops (for) to iterate through a sequence of numbers.
// - Learn to apply the modulo operator (%) to check for divisibility.
// - Practice combining conditions with logical operators (|| for OR).
// - See how to use a counter/accumulator pattern (adding to a running total).
// - Strengthen problem-solving skills by breaking down a real-world 
//   problem (finding multiples) into simple program logic.

// Call the function 'sum' with the limit 10
// Print the result in the console
console.log(sum(10));  

// Define the function 'sum' with one parameter: limit
function sum(limit) {
  // Start with a total sum of 0
  let sum = 0;

  // Loop from 0 up to the given limit
  for (let i = 0; i <= limit; i++)

    // If the number is divisible by 3 OR 5, include it in the sum
    if (i % 3 === 0 || i % 5 === 0)
      sum += i; // Add the number to the running total

  // Return the final sum
  return sum; 
}
