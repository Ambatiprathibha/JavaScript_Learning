const arr = [1, 2, 3, 4, 5, 6, 7];
const res = arr.forEach((x) => {
  return x * 3;
});
console.log(res);

const arr1 = [1, 2, 3, 4, 5, 6, 7];

const res1 = arr1.map((x) => {
  return x * 3;
});

console.log(res1);
//
//filter method
const arr2 = [1, 2, 3, 4, 5, 6, 7];
const res2 = arr.filter((x) => (x % 2 === 0 ? true : false));
console.log(res2);

const arr3 = [1, 2, 3, 4, 5, 6, 7];
const res3 = arr3.filter((x) => x % 2 != 0);
console.log(res3);

//filter with objects
const products = [
  { name: "iphone", price: 1300000, category: "mobile" },
  { name: "samsung", price: 500000, category: "mobile" },
  { name: "oneplus", price: 300000, category: "mobile" },
  { name: "dell", price: 700000, category: "laptop" },
  { name: "hp", price: 600000, category: "laptop" },
  { name: "lenovo", price: 400000, category: "laptop" },
];
const res4 = products.filter((x) => x.category === "mobile");
console.log(res4);

console.log(products.filter((x) => x.price > 50000));
