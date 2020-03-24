// various ways to declare a function:

//1. function doubleIt(num) {
//   return num * 2;
// }

//2. const doubleIt = function myFun(num) {
//   return num * 2;
// };

const doubleIt = num => num * 2; // define function in a single line with one parameter
const result = doubleIt(5);
console.log(result);

const add = (num1, num2) => num1 + num2; // define function in a single line with two parameter
const result1 = add(50, 70);
console.log(result1);

const add1 = () => 5; // define function in a single line with no parameter
const result3 = add1();
console.log(result3);

const doMath = (x, y) => {
  // define function with multiple line with two parameter
  const sum = x + y;
  const diff = x - y;
  const result = sum * diff;
  return result;
};
const result4 = doMath(12, 2);
console.log(result4);
