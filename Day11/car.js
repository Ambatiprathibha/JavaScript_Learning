let car = {
  brand: "BMW",
  cost: 45.5,
  milage: 9.9,

  start: function () {
    console.log("Car is Starting");
  },

  stop: function () {
    console.log("Car is Stopping");
  },

  accelerating: function () {
    console.log("Car is Accelerating");
  },
};
console.log(car);
console.log(car.brand);
console.log(car.cost);
console.log(car.milage);

car.start(); // Car is Starting
car.accelerating(); // Car is Accelerating
car.stop(); // Car is Stopping
