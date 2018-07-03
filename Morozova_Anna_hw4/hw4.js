// task 1

function largest(...args) {
  let max = args[0];
	for (let i = 1; i < args.length; i++) {
  	if (args[i] > max) {
    	max = args[i];
  	}
  } 
  return max;
}

function smallest(...args) {
	let min = args[0];
	for (let i = 1; i < args.length; i++) {
  	if (args[i] < min) {
    	min = args[i];
  	}
  } 
  return min;
} 

console.log(largest(2, 0.1, -5, 100, 3, 200, 15));
console.log(smallest(2, 0.1, -5, 100, 3, -10, 6));

// task 2

function transform(baseArray) {
  return baseArray.map(item => () => item); 
}
const baseArray = [10, 20, 30, 40, 50];
const newArray = transform(baseArray);

console.log(newArray[3]());
console.log(newArray[4]());

// task 3

// sum with reduce / without recursion

function sum(...args) {
  return args.reduce(function(sum, current) {
    return sum + current;
  }, 0);
}
console.log(sum(1,3,5,7));

// sum with recursion

function sum(...args) {
  if(args.length > 0) {
    return args[0] + sum(...args.slice(1));
  } else {
    return 0;
  }
}
console.log(sum(1,3,5,7));

// task 4

function countDown(num) {
  let count = setInterval(function() { 
    console.log(num);
    num--;
    if(num <= 0) {
      clearInterval(count);
    }
  }, 1000);
}
countDown(3);

// task 5

Function.prototype.myBind = function() {
  let fn = this; 
  let context = arguments[0];
  let args = Array.prototype.slice.call(arguments, 1);
  return function() {
    return fn.apply(context, args.concat([].slice.call(arguments)));
  }
}
function addPropToNumber(number) { 
  return this.prop + number; 
}
var bound = addPropToNumber.myBind({ prop: 9 });
console.log(bound(1));