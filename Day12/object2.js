// Factory function
function createCar() {
  const car = {};

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

  return car;
}

// Creating object using factory function
const car = createCar();

// Accessing object properties
console.log("Car Name:", car.name);
console.log("Car Cost:", car.cost);
console.log("Car Mileage:", car.milage);

// Calling methods
car.start();
car.accelerating();
car.stop();
