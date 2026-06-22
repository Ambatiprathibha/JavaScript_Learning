greet();
function greet() {
  console.log("hellooo....");
}

var p; //hoisting
console.log(p);

p = 500;
console.log(p);

let a = 100; //global
console.log(a);

function fun() {
  console.log(a);
}
fun();

function fun1() {
  let b = 200; //function scope variable
  if (true) {
    let c = 300; //block scope
    console.log(c);
  }
  console.log(b);
  //   console.log(c);
}
// console.log(c);

fun1();

//console.log(b);
