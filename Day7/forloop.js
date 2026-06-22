// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }
let j = 1;
do {
  console.log(j);
  j++;
} while (j <= 5);

// let row = "";
// for (let i = 0; i <= 5; i++) {
//   row += "* ";
// }
// console.log(row);

// for (let i = 0; i <= 5; i++) {
//   let row = "";
//   for (let j = 0; j < 5; j++) {
//     row += "* ";
//   }
//   console.log(row);
// }

for (let i = 1; i < 5; i++) {
  console.log("* ".repeat(5));
}

console.log("& ".repeat(5));

for (let i = 1; i <= 5; i++) {
  console.log("$ ".repeat(i));
}

for (let i = 5; i >= 1; i--) {
  console.log("* ".repeat(i));
}

for (let i = 1; i <= 5; i++) {
  console.log("  ".repeat(5 - i) + "% ".repeat(i));
}
