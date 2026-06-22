//function declaration
function add(a, b) {
  return a + b;
}
console.log(add(10, 20));

//function expression
let add1 = function (a, b) {
  return a + b;
};
console.log(add1(10, 120));

//Arrow function
let add2 = (a, b) => {
  return a + b;
};
console.log(add(100, 20));

let add3 = (a, b) => a + b;
console.log(add(1000, 20));

//IIFE->immediately invoked function expression
const greet4 = (function () {
  console.log("Namasthe people");
})();
