//1 global scope-> empty object
// this.a = 100;
// console.log(this);

// function fun() {
//   console.log(this);
// }
// fun();
//->global object

//object
// const greet = {
//   name: "prathibha",
//   fun: function () {
//     console.log(this);
//   },
// };
// greet.fun();//->greet object

this.name = "mohith";
const greet = {
  name: "prathibha",
  fun: () => {
    console.log(this.name);
  },
};
greet.fun();
