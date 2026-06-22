// Creating object using Object constructor
const car = new Object();

// Adding properties
car.name = "BMW";
car.cost = 45.5;
car.milage = 9.9;

// Adding methods
car.start = function () {
  console.log("Car is Starting");
};

car.stop = function () {
  console.log("Car is Stopping");
};

car.accelerating = function () {
  console.log("Car is Accelerating");
};

// Accessing object properties
console.log("Car Name:", car.name);
console.log("Car Cost:", car.cost);
console.log("Car Mileage:", car.milage);

// Calling methods
car.start();
car.accelerating();
car.stop();
