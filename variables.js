// JavaScript Variables and Types Example

// 1. String - used for text
let name = "Jarvis";  
console.log("Name (String):", name);
console.log("Variable Type:", typeof(name));

// 2. Number - can be integer or decimal
let age = 35;  
let height = 5.9;  
console.log("Age (Number):", age);
console.log("Variable Type:", typeof(age));
console.log("Height (Number):", height);
console.log("Variable Type:", typeof(height));

// 3. Boolean - true or false values
let isProgrammer = true;  
console.log("Is Programmer (Boolean):", isProgrammer);

// 4. Undefined - a variable declared but not assigned
let subject;  
console.log("Subject (Undefined):", subject);

// 5. Null - intentional empty value
let middleName = null;  
console.log("Middle Name (Null):", middleName);

// 6. Object - collection of key-value pairs
let person = {
  firstName: "Jarvis",
  lastName: "Miguel",
  profession: "Software Developer"
};
console.log("Person (Object):", person);

// 7. Array - ordered list of values
let skills = ["JavaScript", "Python", "AI Research"];  
console.log("Skills (Array):", skills);

// 8. BigInt - for very large numbers
let bigNumber = 123456789012345678901234567890n;  
console.log("Big Number (BigInt):", bigNumber);

// 9. Symbol - unique and immutable identifier
let uniqueID = Symbol("id");  
console.log("Unique ID (Symbol):", uniqueID.toString());
