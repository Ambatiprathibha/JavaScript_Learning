//Object literal
const car = {
  name: "bmw",
  cost: 25.5,
  stop: function () {
    console.log("Stop car1");
  },

  start: function () {
    console.log(this.name + "  Car is started...");
  },
};
// console.log(car.start());
car.start();
console.log(this);
