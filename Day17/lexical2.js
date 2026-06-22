const globalvar = "I am Global";
function parent() {
  const parentVar = "I am parent";
  function child() {
    const childVar = "I am child";
    // console.log(globalvar);
    // console.log(parentVar);
    // console.log(childVar);
  }

  child();
  console.log(globalvar);
  console.log(parentVar);
  console.log(childVar);
}
parent();
