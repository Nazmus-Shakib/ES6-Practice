const actor = "James Bond"; // constant doesn't let you change the value
//actor = "Leo caprio";
console.log(actor);

const numbers = [14, 17, 20];
numbers[0] = 7; // update an element
numbers.push(45);
console.log(numbers);

const nayok = { name: "shakib", age: 24 };
nayok.name = "sourav"; // update an element
console.log(nayok);

let patientName = "Rahim"; // let(Scope variable) does let you change the value
patientName = "Karim";
console.log(patientName);

let sum = 0;
for (let i = 0; i < 10; i++) {
  sum = sum + i;
  console.log(i); // let don't allow to lick the value out of the scope
}
//console.log(i);
