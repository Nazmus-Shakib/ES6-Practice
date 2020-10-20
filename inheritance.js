class Parent {
  constructor() {
    this.fatherName = "Schwerznegger";
  }
}
class Child extends Parent {
  constructor(name) {
    super(); // to call the upper class constructor
    this.name = name;
  }
  getFullName() { // can declare a function inside a class as well
    return this.name + " " + this.fatherName;
  }
}
const baby = new Child("Arnold");
const baby2 = new Child("Tom");
console.log(baby.getFullName());
console.log(baby2);
