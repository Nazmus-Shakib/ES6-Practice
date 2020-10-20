class Student {
  constructor(sId, sName) {
    this.id = sId;
    this.name = sName;
    this.school = "T&J High School"; // default value that will shared by all object
  }
}
// make object from class
const student1 = new Student(24, "Shakib"); // to call class using parameter like function
const student2 = new Student(25, "Sourav");
console.log(student1, student2);

console.log(student1.name, student2.name); // can access value like object
