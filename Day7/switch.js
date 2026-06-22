const scan = require("prompt-sync")();

let value = Number(scan("Enter the value:"));
switch (value) {
  case 5:
    console.log("correct value");
    break;
  case 10:
    console.log("wrong value");
    break;
  default:
    console.log("No value is found");
}
