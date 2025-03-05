// Declare variables
let a = 10;
let b = 5;

// Arithmetic Operations
let addition = a + b;
let subtraction = a - b;
let multiplication = a * b;
let division = a / b;
let remainder = a % b;

// Output results of arithmetic operations
console.log("Addition: " + addition);
console.log("Subtraction: " + subtraction);
console.log("Multiplication: " + multiplication);
console.log("Division: " + division);
console.log("Remainder: " + remainder);

// Conditions based on the values of a and b
if (a > b) {
    console.log("a is greater than b");
} else if (a < b) {
    console.log("a is less than b");
} else {
    console.log("a is equal to b");
}

// Check if addition is greater than 10
if (addition > 10) {
    console.log("The sum is greater than 10");
} else {
    console.log("The sum is not greater than 10");
}

// Check if the result of division is a whole number
if (Number.isInteger(division)) {
    console.log("The division result is a whole number");
} else {
    console.log("The division result is not a whole number");
}
