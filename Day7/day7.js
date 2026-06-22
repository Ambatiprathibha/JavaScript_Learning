const scan = require("prompt-sync")();
let age = Number(scan("enter your age:"));
console.log("your age is ", age);
if (age) {
  console.log("correct age");
} else {
  console.log("wrong age");
}
if (1 === "1") {
  console.log("if block running");
} else {
  console.log("else is running");
}
