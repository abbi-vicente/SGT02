// JS Operators -symbols or keywords
// Arithmetic Operators: +, -, *, /
console.log(5 + 5);
console.log(5 - 5);
console.log(5 * 5);
console.log(5 / 5);

// Modulo (%)
console.log(100 % 3);
// Exponent (**)
console.log(5 ** 5);

// Assignment Operators (=, +=, -=, *=, /=)
let num = 26;
console.log(num);

num += 1;
// num = num + 1
console.log(num);

num -= 1;
console.log(num);

num *= 2;
console.log(num);

num /= 2;
console.log(num);

// Comparison Operators - true or false <, >, <=, >=
console.log(50 > 20);
console.log(50 < 20);
console.log(50 >= 50);
console.log(50 <= 51);

console.log(50 == "50"); //true, loose equality
// type coercion

console.log(50 === "50"); //false, strict equality

// Logical Operators
// AND &&
console.log(true && false);
console.log(50 > 23 && 50 <= 23);

// OR ||
console.log(true || false);

// NOT !
console.log(!false);

// Unary Operators ++, --
num++; //increment
console.log(num);

num--; //decrement
console.log(num);

// Ternary Operator (condition ? result : else)
let activeStatus = false;
let member = activeStatus ? "Registered" : "Not Registered";

console.log(member);

// typeof operator
console.log(typeof activeStatus);
console.log(typeof member);

// JS Expressions
let result = 2 + 3 * 4; //PEMDAS
console.log(result);

// String Concatenation (+)
let string = "Hello " + " " + "World!" + " " + result;
console.log(string);

// Logical
let x = 10;
let y = 4;
let logic = x > 5 && y < 10;
console.log(logic);

// Assignment
num = 27;

num += 10;
console.log(num);

// Function - call functions and pass arguments
//parameter
function greeting(name) {
	console.log("Hey there " + name + "!");
}
//argument
greeting("Zaki");
