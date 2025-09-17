// 🎯 Purpose: This program defines a circle object with a radius property 
// and a getter method 'area' that calculates the area of the circle. 
// The getter allows the area to be accessed like a property instead of a function call.
//
// 📚 Student Learning: By studying this script, students will:
// - Learn how to define and use objects in JavaScript.
// - Understand the use of getters (get) to compute values dynamically.
// - Apply the formula for the area of a circle (πr²) in code.
// - Recognize how 'this' refers to the object itself within methods.
// - Appreciate the difference between calling a function and using a property-like getter.

// Define an object 'circle' with a radius property and a getter for area
const circle = {
  radius: 1,

  // Getter method: computes area when accessed
  get area() {
    return Math.PI * this.radius * this.radius;
  }
};

// Access the 'area' property (getter) of the circle object
console.log(circle.area);  // Expected output: 3.141592653589793
