// task 1

function largest() {
  let max = arguments[0];
	for (let i = 1; i < arguments.length; i++) {
  	if (arguments[i] > max) {
    	max = arguments[i];
  	}
  } 
  return max;
}

function smallest() {
	let min = arguments[0];
	for (let i = 1; i < arguments.length; i++) {
  	if (arguments[i] < min) {
    	min = arguments[i];
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

function sum() {
  let res = 0;
  for(let i = 0; i < arguments.length; i++) {
    res += arguments[i];
  }
  return res;
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