class Demo {
  constructor(name) {
    if (this.constructor === Demo) {
      throw new Error("Cannot instantitnate Abstraction class");
    }
    this.name = name;
  }
  work() {
    throw new Error("Work must be implemented");
  }
}
//const d1 = new Demo();
class Child extends Demo {
  work() {
    console.log("I am working as software developer");
  }
}
const c = new Child();
c.work();
