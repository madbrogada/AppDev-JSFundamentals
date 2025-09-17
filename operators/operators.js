// JavaScript Operators

// 1. Arithmetic Operators (+, -, *, /, %, **)
let a = 10;
let b = 3;

console.log("Arithmetic Operators:");
console.log("a + b =", a + b);   // Addition → 13
console.log("a - b =", a - b);   // Subtraction → 7
console.log("a * b =", a * b);   // Multiplication → 30
console.log("a / b =", a / b);   // Division → 3.333...
console.log("a % b =", a % b);   // Modulus (remainder) → 1
console.log("a ** b =", a ** b); // Exponentiation → 1000

console.log("------------------------------");

// 2. Assignment Operators (=, +=, -=, *=, /=)
let x = 5;  
console.log("Assignment Operators:");
console.log("x =", x); 

x += 2; // same as x = x + 2
console.log("x += 2 →", x);

x -= 1; // same as x = x - 1
console.log("x -= 1 →", x);

x *= 3; // same as x = x * 3
console.log("x *= 3 →", x);

x /= 2; // same as x = x / 2
console.log("x /= 2 →", x);

console.log("------------------------------");

// 3. Comparison Operators (==, ===, !=, !==, >, <, >=, <=)
let num1 = 5;
let num2 = "5";

console.log("Comparison Operators:");
console.log("num1 == num2 →", num1 == num2);   // true (only compares value)
console.log("num1 === num2 →", num1 === num2); // false (compares value & type)
console.log("num1 != num2 →", num1 != num2);   // false
console.log("num1 !== num2 →", num1 !== num2); // true
console.log("num1 > 3 →", num1 > 3);           // true
console.log("num1 <= 5 →", num1 <= 5);         // true

console.log("------------------------------");

// 4. Logical Operators (&&, ||, !)
let p = true;
let q = false;

console.log("Logical Operators:");
console.log("p && q =", p && q); // AND → false
console.log("p || q =", p || q); // OR → true
console.log("!p =", !p);         // NOT → false

console.log("------------------------------");

// 5. Increment / Decrement (++, --)
let counter = 10;

console.log("Increment / Decrement:");
console.log("counter =", counter);

counter++;  // same as counter = counter + 1
console.log("counter++ →", counter);

counter--;  // same as counter = counter - 1
console.log("counter-- →", counter);
