
// 🎯 Purpose: This program displays only the string-type properties 
// of an object. In this example, we have a 'movie' object with 
// mixed data types (string, number). The function 'showProperties'
// will filter out and print only the string properties (title, director).
//
// 📚 Student Learning: By studying this script, students will:
// - Understand how to define and work with JavaScript objects.
// - Learn to use the for...in loop to iterate over object properties.
// - Apply the typeof operator to check the data type of values.
// - Practice filtering data based on type conditions (strings only).
// - Strengthen skills in combining loops, conditions, and object handling 
//   to solve practical problems.

// Define an object 'movie' with properties (title, releaseYear, rating, director)
const movie = { 
  title: 'a',         // string
  releaseYear: 2018,  // number
  rating: 4.5,        // number
  director: 'b'       // string
};

// Call the function 'showProperties' and pass the 'movie' object
showProperties(movie);

// Define the function 'showProperties' with one parameter: obj
function showProperties(obj) {
  // Use a for...in loop to iterate over all keys in the object
  for (let key in obj) {
    
    // Check if the value of the property is a string
    // typeof obj[key] === 'string' → true only if the property value is text
    if (typeof obj[key] === 'string')
      
      // Print the key and its value
      console.log(key, obj[key]);
  }
}
