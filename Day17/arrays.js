//arrays literals
//1.way
const arr = [1, 2, 3, 4, 5];
console.log(arr);

const fruits = ["apple", "banana", "mango", "Orange"];
const emp = [];

console.log(fruits);
console.log(emp);

//2.access different types
const arr1 = [
  1,
  true,
  123456n,
  "hello",
  null,
  [1, 2, 3],
  undefined,
  { name: "prathibha", age: 22 },
];

console.log(arr1);

//2.way
const arr2 = new Array(1, 2, 3, 4, 5);
console.log(arr2);
const arr3 = new Array(5, 10);
arr3[0] = "prathibha";
console.log(arr3);
console.log(arr3.length);

//3.way
const arr4 = Array.of(5, 10, 12, 65);
console.log(arr4);

//4.way
const arr5 = Array.from("prathibha");
console.log(arr5);
