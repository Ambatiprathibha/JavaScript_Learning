//error
const scan = require("prompt-sync")();
const n1 = Number(scan("Enter first number: "));
const n2 = Number(scan("Enter second number: "));
function divide(a, b) {
  let res;
  if (n2 !== 0) {
    res = n1 / n2;
  } else {
    throw new Error("Division by zero is not allowed.");
  }
  return res;
}
try {
  console.log(`the result of ${n1} divided by ${n2} is: ${divide(n1, n2)} `);
} catch (error) {
  console.error(error.message);
} finally {
  console.log("This will always execute.");
}
