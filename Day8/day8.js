const scan = require("prompt-sync")();
let n = scan("Enter the number of rows");

for (let i = 1; i <= n; i++) {
  console.log((i + " ").repeat(i));
}

for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += j + " ";
  }
  console.log(row);
}
let count = 1;
for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += count + " ";
    count++;
  }
  console.log(row);
}
