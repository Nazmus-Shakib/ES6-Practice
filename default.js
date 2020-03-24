function add(num1, num2 = 12) {
  // backup value for if a parameter isn't declared
  //num2 = num2 || 12;
  return num1 + num2;
}

const total = add(5, 1);
console.log(total);
