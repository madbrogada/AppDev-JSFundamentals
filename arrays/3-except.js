const numbers = [1, 2, 3, 4]; // Define an array of numbers

const output = except(numbers, [1, 2]); // Call the except function to exclude 1 and 2 from numbers

console.log(output); // Print the resulting array

function except(array, excluded) { // Define a function to exclude specified elements from an array
  const output = []; // Create an empty array to store the result
  for (let element of array) // Loop through each element in the input array
    if (!excluded.includes(element)) // If the element is not in the excluded array
      output.push(element); // Add the element to the output array
  return output; // Return the output array
}