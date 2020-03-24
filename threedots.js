const num = [1, 2, 3, 4];
const num1 = [5, 6];
const num2 = [7, 8, 9];

// to add all array together
// const allArray = num
//   .concat(num1)
//   .concat([22])
//   .concat(num2);
// console.log(allArray);

// another way
const allArray2 = [...num, ...num1, 25, ...num2]; // used three dots (...) to add all the array values
console.log(allArray2);

const x = 5,
  y = 10,
  z = 15;
const maximum = Math.max(x, y, z);
console.log(maximum);

const age = [22, 25, 27];
const maximum1 = Math.max(...age); // used three dots (...) to pass the value of the array
console.log(maximum1);
