// variables
// let - mutable or changeable variable
let myName = "Abbi";
console.log(myName);

myName = "Jared";
console.log(myName);
// var - older way of mutable variable
var myHobby = "Sleeping";
console.log(myHobby);

myHobby = "Gaming";
console.log(myHobby);

// const - unchangeable variable
const myAge = 25;
console.log(myAge);

// key points
// comments - ctrl + / or cmd + /
// case sensitivity - camelCase and myName vs MyName
// console.log()

// Data Types
// Primitive Types
// Number
let number = 13;
number = 3.14;
number = -10;
console.log("Number: ", number);

// String - '' or " "
let hello = "Hello, World!";
hello = "Let's go!";
console.log("String: ", hello);

// Boolean - true or false
let isStudent = true;
isStudent = false;
console.log("Boolean: ", isStudent);

// Undefined - unitialized or missing value
let score;
console.log("Undefined: ", score);

// Null - intentional absence
let nullVar = null;
console.log("Null: ", nullVar);

// Reference Types
// Object - key-value pairs enclosed in curly braces {}
let personObject = {
	name: "Jared",
	age: 23,
};
console.log("Object: ", personObject);
console.log("Person's name: ", personObject.name);

// Array - ordered list of values in square brackets []
// Create an array
let fruits = ["apple", "banana", "orange", "mango"];
console.log("Fruits array: ", fruits);

// Access array elements
// arrays will start at 0, not 1
console.log("First fruit: ", fruits[0]);
// length
console.log("Last fruit: ", fruits[fruits.length - 1]);

// modifying elements
fruits.push("watermelon"); //add an element at the end
fruits.pop(); //remove last element
fruits[1] = "grape";

console.log("Modified array: ", fruits);

// Function - resuable blocks of code
function sayHello() {
	console.log("Hello from Javascript!");
}

sayHello();

// Date - represents a specific moment in time
let date = new Date("2020-04-14");
console.log(date);
