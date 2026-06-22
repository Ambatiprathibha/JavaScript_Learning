//Object literal
const car = {
  name: "bmw",
  cost: 25.5,
  "total mileage": 67.9,
  100: "century",
  stop: function () {
    console.log("Stop car1");
  },

  start: function () {
    console.log("Car is started...");
  },
};
const keys = Object.keys(car);
//console.log(keys);
for (let i = 0; i < keys.length; i++) {
  console.log(keys[i] + " : " + car[keys[i]]);
}
// for (keys in car) {
//   console.log(keys + " : " + car[keys]);
// }
const values = Object.values(car);
for (let elements of values) {
  console.log(elements);
}

console.log(Object.entries(car));
console.log(car);

//2 object constructor
const car1 = new Object();
car1.name = "thar";
car1.cost = 5.6;
car1.start = () => console.log("Start car2");
car1.stop = () => console.log("Stop car2");
console.log(car1.name);
for (ke in car1) {
  console.log("KEYS : " + ke);
}
// const keys = Object.keys(car1);
// console.log(keys);

//3.Factory function

function createCar(name, cost) {
  return {
    cname: name,
    ccost: cost,
    start: function () {
      console.log("start car2");
    },
  };
}
const c1 = createCar("maruthi", 98);
const c2 = createCar("Kia", 89);
console.log(c1);
console.log(c2);
