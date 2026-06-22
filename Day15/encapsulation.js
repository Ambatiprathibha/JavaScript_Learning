class Employee {
  name;
  department;
  #salary; //private

  //constructor
  constructor(name, department, salary) {
    this.name = name;
    this.department = department;
    this.#salary = salary;
  }
  //getter
  get salary() {
    return this.#salary;
  }
  //setter
  set salary(newSalary) {
    this.#salary = newSalary;
  }
  getDetails() {
    console.log(`${this.name} || ${this.department} ||${this.#salary}`);
  }
  work() {
    console.log(`${this.name} is working hard in office`);
  }
  calculateBonus() {
    return this.#salary * 0.1;
  }
}
const e1 = new Employee("prathibha", "developer", 50000);
console.log(e1.name);
console.log(e1.department);
console.log(e1.salary);
e1.work();
console.log(e1.calculateBonus());
e1.salary = 75000;
console.log(e1.salary);
