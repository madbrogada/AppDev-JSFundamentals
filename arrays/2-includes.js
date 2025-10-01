const numbers = [1, 2, 3, 4]; // Define an array of numbers

console.log(includes(numbers, -1)); // Check if -1 is in the array and print the result

function includes(array, searchElement) { // Define a function to check for an element in an array
  for (let element of array) // Loop through each element in the array
    if (element === searchElement) // If the current element matches the search element
      return true; // Return true if found
  return false; // Return false if not found after checking all elements
}
