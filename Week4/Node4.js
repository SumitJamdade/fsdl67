// Using for loop to print multiplication table of 5
let num = 5;

console.log(`Multiplication table of ${num} using for loop:`);
for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
}
// Using while loop to print multiplication table of 5
let num = 5;
let i = 1;

console.log(`Multiplication table of ${num} using while loop:`);
while (i <= 10) {
    console.log(`${num} x ${i} = ${num * i}`);
    i++; // Increment i to move to the next iteration
}
