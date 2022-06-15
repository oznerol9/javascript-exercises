const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
};

const multiply = function(array) {
	return array.reduce((accumulator, nextItem) => accumulator * nextItem);
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(num) {

	var result = num;
	
	if (num === 0 || num === 1) {
		return 1	
	}
	while (num > 1) {
		num--;
		result *= num;
	}
	return result;
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
