const arr = [1, 2, 3, 4, 5];
console.log(arr[0]);
// arr[0] = "Tap";
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

for (let i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i]);
}

for (let i = arr.length - 1; i >= 0; i--) {
  console.log(arr.at(i));
}
console.log(Array.isArray(arr));

console.log(typeof arr);

//wrapping  negative indexing we can also

console.log(arr.at(-1));
//basic methods
