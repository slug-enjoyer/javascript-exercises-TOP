const add = function(x,y) {
	return x+y;
};

const subtract = function(x,y) {
	return x-y;
};

const sum = function(args) {
  return args.reduce((total, current)=> total + current,0);
};

const multiply = function(args) {
  let sum = 1;
  for (let i = 0; i < args.length; i++){
    sum *= args[i];
  }
  return sum;
};

const power = function(x,y) {
	return x ** y;
};

const factorial = function(x) {
	let sum = 1
  for(let i = 1; i <= x; i++){
    sum *= i;
  }
  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
