function fun1() {
  console.log("Hello, fun 1 Working!");
}
function fun2() {
  setTimeout(() => {
    console.log("Hello, fun 2 Working!");
  }, 5000);
}
function fun3() {
  console.log("Hello, fun 3 Working!");
}
function fun4() {
  console.log("Hello, fun 4 Working!");
}
fun1();
fun2();
setTimeout(fun4, 4000);
setTimeout(() => {
  fun3();
}, 5000);
