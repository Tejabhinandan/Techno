// Named function
function sum(n1, n2) {
  return n1 + n2;
}
var s = sum(10, 25);
console.log(s);

console.log("+++++++++++++++++++++++++");

// Anonymous function
var divide = function (n1, n2) {
  return console.log(n1 / n2);
};
divide(33, 75);
console.log("+++++++++++++++++++++++++");

// IIFE (Immediately invoked function expression  OR self invoked function)

(function (n1, n2) {
  var product = n1 * n2;
  console.log(`product ${product}`);
})(10, 29);

(function (n1, n2) {
  var product = n1 % n2;
  console.log(`product ${product}`);
})(10, 29);
console.log("+++++++++++++++++++++++++");
console.log("Arrow function");

// arrow function
// Single line return is not nedded
var div = (n1, n2) => n1 / n2;
console.log("div", div(20, 40));

// if only one parameter then paranthesis is optional
var greet = (name) => {
  return `${name},welcome`;
};
console.log(greet("teja"));

// NO parameter - paranthesis is mandatory
var fristTenNumbers = () => {
  for (var i = 1; i < 11; i++) {
    console.log(i);
  }
};
fristTenNumbers();
console.log("+++++++++++++++++++++++++");

// Function Currying
console.log("// Function Currying");
var square = (n1) => {
  return function (n2) {
    console.log(`square of num:${n2 * n1}`);
    return function () {
      return console.log(`num is ${n1 * n2}`);
    };
  };
};
square(10)(20)(30);
console.log("+++++++++++++++++++++++++");

// Callback function
console.log("// Callback function");
function test(something) {
  console.log("im 1st");
  something();
}
function sample() {
  console.log("i m 2nd");
}
test(sample);
console.log("+++++++++++++++++++++++++");

// Example 2
var userInput = (callback) => {
  var name = prompt("Enter your name");
  console.log("user name entered ", name);
  callback(name);
};
var displayUser = (name) => {
  alert(`hello ${name}`);
};
userInput(displayUser);

// Hositing

var a = 10;
// console.log(a)
function num() {
  console.log(a);
  var a = 40;
}
num();
console.log("====================================");
wish();
function wish() {
  console.log("wish is executed");
}
// wish()

// greet()
var greet = () => {
  console.log("gm");
};
greet();
