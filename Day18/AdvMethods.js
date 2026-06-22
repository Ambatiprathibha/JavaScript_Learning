//call back fun
function add(a, b) {
  return a + b;
}

//below one is Higher order function
function calc(a, b, para) {
  console.log(para(a, b));
}
calc(10, 20, add);
//call back example

const arr = [1, 2, 3, 4, 5];
function print(x) {
  console.log(x * 10);
}
arr.forEach(print);

arr.forEach((x) => console.log(x * 10));

const arr1 = [1, 2, 3, 4, 5];
let res = arr1.map((x) => x * 2);
console.log(res);
