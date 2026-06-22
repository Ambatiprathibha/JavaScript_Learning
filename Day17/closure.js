//closure exmp
function outerfun() {
  let a = 45;
  function innerfun() {
    console.log(a);
  }
  return innerfun;
}
const res = outerfun();
res();
