let sum = 0;

function add(...nums) {
  for (a of nums) {
    sum += a;
  }
  return sum;
}

let res = add(10, 20, 100);
console.log(res);

// Default Parameters Example

const scan = require("prompt-sync")();

let name = scan("Enter Your Name: ");
let age = Number(scan("Enter Your Age: "));

function greet1(name = "Guest User", age = 16) {
  console.log("Hello How Are You " + name + " Age " + age);
}

// Call the function
greet1(name); // only name passed
greet1(name, age); // uncomment this to pass both
// greet1();          // uses both default values
