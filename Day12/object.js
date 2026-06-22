// Factory Function to create Car objects
function createCar(name, cost, milage) {
  return {
    name: name,
    cost: cost,
    milage: milage,

    start: function () {
      console.log("CAR started!");
    },

    stop: function () {
      console.log("CAR stopped!");
    },
  };
}

// Creating objects using factory function
const c1 = createCar("BMW", 45.5, 9.9);
console.log(c1.milage);
c1.start();

const c2 = createCar("THAR", 12.5, 78.4);
console.log(c2.name);
c2.stop();
