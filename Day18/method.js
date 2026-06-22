const arr = [10, 20, 30, 40, 50];
//methods
//adding elements push-->last
console.log(arr, arr.length);
arr.push(60);
console.log(arr, arr.length);
//front -->unshift
arr.unshift(0);
console.log(arr);

//removing pop() and shift()
arr.pop();
console.log(arr);
arr.shift();
console.log(arr);

//splice-> to add and delete at any location

// arr.splice(1, 3);
// console.log(arr);

arr.splice(1, 3, 60, 70, 80, 90);
console.log(arr);
arr.splice(1, 0, 90, 100, 110, 120);
console.log(arr);
//slice(start,end)
const arr1 = [10, 20, 30, 40, 50, 60, 10];
//arr.slice(1,4);
console.log(arr1.slice(1, 4));

//indexof() and lastIndexof()
console.log(arr1.indexOf(20));
console.log(arr1.indexOf(100));
console.log(arr1.lastIndexOf(10));
console.log(arr1.includes(100));
//concat
const arr2 = [1, 2, 3];
const arr3 = [4, 5, 6];
const res = arr2.concat(arr3);
console.log(res);

//join reverse

const arr4 = ["apple", "banana", "orange"];
console.log(arr4.join("-"));
console.log(arr4.reverse());
//sort
const arr6 = ["cat", "zeta", "apple", "banana", "orange"];
console.log(arr6.sort());
//fill , sort of numbers
const arr8 = [1, 11, 24, 15, 25, 110, 1000];
console.log(arr8.sort((a, b) => a - b));
console.log(arr8.fill(0));
