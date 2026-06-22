function executeOperation(a, b, operation) {
  return operation(a, b);
}
function add(x, y) {
  return x + y;
}
function multiply(x, y) {
  return x * y;
}
console.log(executeOperation(10, 20, add));

//return
function createmultiplier(factor) {
  return function (num) {
    return num * factor;
  };
}
const double = createmultiplier(3);
console.log(double(5));
