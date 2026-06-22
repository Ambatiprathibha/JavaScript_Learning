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
class Developer extends Employee {
  language;
  constructor(name, salary, language) {
    super(name, "Engineering", salary);
    this.language = language;
  }
  coding() {
    console.log(`${this.name} is coding in ${this.language}`);
  }
  //overriden method
  work() {
    console.log(`${this.name} is writting ${this.language}`);
  }
  calculateBonus() {
    return this.salary * 0.2;
  }
}
const d1 = new Developer("Prathibha", 75000, "Java");
console.log(d1.name, d1.language, d1.salary);
d1.work();
console.log(d1.calculateBonus());
d1.coding();
d1.getDetails();
