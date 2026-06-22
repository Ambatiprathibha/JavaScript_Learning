const prompt = require("prompt-sync")();

let num1 = Number(prompt("First Number: "));
let operator = prompt("enter the operator: (+,-.*,/,%)");
let num2 = Number(prompt("Second Number: "));

let res;

switch (operator) {
  case "+":
    res = num1 + num2;
    break;
  case "-":
    res = num1 - num2;
    break;
  case "*":
    res = num1 * num2;
    break;
  case "/":
    res = num1 / num2;
    break;
  case "%":
    res = num1 % num2;
    break;
  default:
    console.log("Invalid operator");
}

console.log(`${num1} ${operator} ${num2} = ${res}`);
