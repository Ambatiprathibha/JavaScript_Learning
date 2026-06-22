//constructor function
class Student {
  constructor(name, age, skill) {
    this.name = name;
    this.age = age;
    this.skill = skill;
  }
  //prototype -> to avoid stack frame of n objects created
  introduce() {
    console.log(`Hi I am ${this.name}  I am ${this.age} years old `);
    console.log(`I have ${this.skill} skills`);
  }
}
const s1 = new Student("prathibha", 22, "JavaScript");
console.log(s1);
console.log(s1.name, s1.age, s1.skill);
s1.introduce();

const s2 = new Student("Mohith", 20, "Node Js");
console.log(s2);
s2.introduce();
