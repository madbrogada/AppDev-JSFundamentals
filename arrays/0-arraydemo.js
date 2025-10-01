// Create an empty array
let myArray = [];

// Add elements to the array
myArray.push(1);
myArray.push(2);
myArray.push(3);
myArray.push(4);

console.log(myArray); // Output: [1, 2, 3, 4]

myArray.unshift(95);
console.log(myArray); // Output: [95, 1, 2, 3, 4]

myArray.splice(3,0,100);
console.log(myArray); // Output: [95, 1, 2, 100, 3, 4]

