function add1(a, b) {
  return a + b;
}
// let add2 = add1;
// console.log(add1(5, 8));
// console.log(add2(5, 8));
// console.log(add1.name);
// console.log(add1.length);
// console.log(add1.call());
// console.log(add2.name);

function exmp(a) {
  console.log(a);
}
const fun = add1;
console.log(exmp.length, exmp.name);
console.log(fun.name, fun.length);

let greet = function (name) {
  console.log(`Hello ${name}`);
};
let sayHello = greet;
sayHello("Prathibha");
