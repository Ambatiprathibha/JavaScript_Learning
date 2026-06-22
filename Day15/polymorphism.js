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

class Manager extends Employee {
  constructor(name, salary, teamSize) {
    super(name, "Management", salary);
    this.teamSize = teamSize;
  }
  calculateBonus() {
    return this.salary * 0.3;
  }
}

const e1 = new Employee("Prathibha", "admin", 60000);
const d1 = new Developer("mohith", 75000, "Java");
const m1 = new Manager("chaitanya", 3000, 50);
console.log(e1.calculateBonus());
console.log(d1.calculateBonus());
console.log(m1.calculateBonus());
