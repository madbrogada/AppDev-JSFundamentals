// 🎯 Purpose: This program prints all prime numbers up to a given limit. 
// A prime number is a number greater than 1 that has no divisors 
// other than 1 and itself. The function 'showPrimes' checks each number 
// within the limit and prints only those that are prime.
//
// 📚 Student Learning: By studying this script, students will:
// - Understand the definition of prime numbers and how to test for primality.
// - Learn how to use nested loops to check divisibility of numbers.
// - Practice using conditional logic to filter specific numbers.
// - Gain problem-solving experience by applying mathematical rules in programming.
// - Strengthen algorithmic thinking by breaking down a problem (prime detection) 
//   into smaller reusable functions (e.g., isPrime).

// Call the function 'showPrimes' with the limit 10
// This will print all prime numbers from 2 up to 10
showPrimes(10);

// Define the function 'showPrimes' with one parameter: limit
function showPrimes(limit) {
  // Loop through all numbers from 2 up to the limit
  for (let number = 2; number <= limit; number++) 
    // If the number is prime, print it
    if (isPrime(number)) console.log(number); 
}

// Helper function to check if a number is prime
function isPrime(number) {
  // Try dividing the number by all smaller numbers starting from 2
  for (let factor = 2; factor < number; factor++) 
    // If divisible by any factor, it's not prime
    if (number % factor === 0) 
      return false; 
  
  // If no divisors were found, the number is prime
  return true; 
}
