// conditional statement
// if
let number = 25;

if (number > 23) {
	console.log("You're greater than 23");
}

// if / else if / else
if (number > 25) {
	console.log("You're greater than 25");
} else if (number < 25) {
	console.log("You're less than 25");
} else {
	console.log("You're equal to 25");
}

// switch
let day = "St. Patrick's Day";

switch (day) {
	case "Monday":
		console.log("It's the start of the week!");
		break;
	case "Friday":
		console.log("It's the end of the week!");
		break;
	default:
		console.log("It's a regular day");
		break;
}

// Loops
// for loop
for (let i = 0; i < 5; i++) {
	console.log("For Count: ", i);
}

// while loop
// while (condition) {}
let count = 0;
while (count < 5) {
	console.log("While Count: ", count);
	count++;
}

// do while loop
let input = "";

do {
	input = prompt("Please enter your name: ");
} while (input == "");

let j = 1;

do {
	console.log("Do-While Count: ", j);
	j++;
} while (j <= 5);
