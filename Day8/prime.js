const scan = require("prompt-sync")();
let n = scan("Enter a number");

function checkPrime(num) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(checkPrime(n));
// undefined
console.log(b); // ReferenceError: Cannot access 'b' before initialization
console.log(a);
let a;
var b;
a = 5;
b = 6;
