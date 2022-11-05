// 1st prgm
console.log(" Hello World.......!");
console.log("==========================================");

// 2nd prgm:- Add Two Numbers
let a = 23;
let b = 34;
let c = a + b;
console.log("add -", c);
console.log("==========================================");

//  To find the Square Root
let num = 81;
let num1 = Math.sqrt(num);
console.log("Sqrt -", num1);
console.log("==========================================");

//To Calculate the Area of a Triangle
let base = 0.8;
let height = 9;
let area = 0.5 * base * height;
console.log("Area of a Triangle -", area);
console.log("==========================================");

// To Swap Two Variables
let a1 = 68;
let b1 = 42;
console.log("before swapping a1-", a1);
console.log("before swapping b1-", b1);
temp = a1;
a1 = b1;
b1 = temp;
console.log("After swapping a1-", a1);
console.log("After swapping b1-", b1);
console.log("==========================================");

//Quadratic Equation
let root1, root2;
let c1 = 40;
let c2 = 2;
let con=7;
let discriminant = c2 * c2 - 4 * c1 * con; // Calculating Discriminant
if (discriminant > 0) { //condition for real and different roots
    r1 = (-c2 + Math.sqrt(discriminant)) / (2 * c1);
    r2 = (-c2 - Math.sqrt(discriminant)) / (2 * c2);
    console.log(`6) The roots of quadratic equation are ${r1} and ${r2}`);
}
else if (discriminant == 0) { 
    //condition for real and equal roots
    r1 = r2 = -c2 / (2 * c1);
    
    console.log(`The roots of quadratic equation are ${r1} and ${r2}`);
}
else { //if roots are not real
    let realPart = (-c2 / (2 * c1)).toFixed(2);
    let imagPart = (Math.sqrt(-discriminant) / (2 * c1)).toFixed(2);
    // result
    console.log(`The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`);
    }
    console.log("==========================================");
    
    //7) Conver KM to Miles
    let km = 78;
    let convertedM=km*0.6214;
    console.log(`${km} km is equal to ${convertedM} miles.`);
    console.log("==========================================");
    
    //8) Convert celsius to fahrenheit
    const celsius = 30;
    const fahrenheit = (celsius * 1.8) + 32;
    console.log(`${celsius} degree celsius is equal to ${fahrenheit} degree fahrenheit.`);
    console.log("==========================================");
    
    //9) Generate Random Number
    let ranN = Math.random();
    console.log("The Random Number is ", ranN);
    console.log("==========================================");
    
    // 10) Check number is positive Negative Zero
    let tN=-1;
    if (tN > 0) { // check if number is greater than 0
        console.log("The number is positive");
    }
    else if (tN == 0) { //check if number is 0
        console.log("The number is zero");
    }
    else { //if number is less than 0
        console.log("The number is negative");
    }
    console.log("==========================================");
    
    //11) Odd or Even
    let anyNum = 30;
    if (anyNum % 2 == 0) {
        console.log(`${anyNum} is even`);
    } else console.log(`${anyNum} is odd`);
    console.log("==========================================");
    
    // 12) Largest Among Three Numbers
    let n1 = 34;
    let n2 = 65;
    let n3 = 76;
    let largest = n1 > n2 ? (n1 > n3 ? n1 : n3) : n2 > n3 ? n2 : n3;
    console.log(`Largest among ${n1},${n2},${n3} is ${largest}`);
    console.log("==========================================");
    
    //13) Check Prime Number
    let pNum = 43;
    let isPrime = true;
    if (pNum === 1) {
        // to check if the number is 1 or not?
        console.log("1 is neither prime nor composite number.");
    } else if (pNum > 1) {
        // looping through 2 to number-1
        for (let i = 2; i < pNum; i++) {
            if (pNum % i == 0) {
                isPrime = false;
                break;
            }
        }
        
        if (isPrime) {
            console.log(`${pNum} is a prime number`);
        } else {
            console.log(`${pNum} is a not prime number`);
        }
    }
    console.log("==========================================");
    
    //14) Prime Number in an interval
    const sN = 45;
    const eN = 89;
    console.log(
  `The prime numbers between ${sN} and ${eN} are:`
  );
  // looping from lowerNumber to higherNumber
  for (let i = sN; i <= eN; i++) {
      // looping from Starting Number to Ending Number
      let flag = 0;
      
      // looping through 2 to user input number
      for (let j = 2; j < i; j++) {
          if (i % j == 0) {
              flag = 1;
      break;
    }
}
if (i > 1 && flag == 0) {
    // if number greater than 1 and not divisible by other numbers
    console.log(i); //How to put this in an array and display the output inline??????
}
}
console.log("==========================================");

//15) JavaScript Program to Find the Factorial of a Number
let fNum = 34;
let num3=2
if (num3 < 0) {
  //checking if number is negative
  console.log("Factorial for negative number does not exist.");
} else if (num3 === 0) {
    // If the number is ZERO
    console.log(`The factorial of ${num3} is 1.`);
} else {
  // if number is positive
  
  let fact = 1;
  for (i = 1; i <= num3; i++) {
    fact *= i;
}
console.log(`The factorial of ${num3} is ${fact}.`);
}
console.log("==========================================");

//16) JavaScript Program to Display the Multiplication Table
const mulNum = 7;
console.log(`Multiplication Table for ${mulNum} is: `);
for (let i = 1; i <= 10; i++) {
    //creating a multiplication table
    let result = i * num3; // multiply i with number
    console.log(`${mulNum} * ${i} = ${result}`); // display the result
}
console.log("==========================================");
//18) JavaScript Program to Check Armstrong Number
let sum = 0;
const armnumber = 10;

// create a temporary variable
let armTemp = armnumber;
while (armTemp > 0) {
    // finding the one's digit
    let remainder = armTemp % 10;
    sum += remainder * remainder * remainder;
    // removing last digit from the number
    armTemp = parseInt(armTemp / 10); // convert float into integer
}
// check the condition
if (sum == armnumber) {
    console.log(`${nuarmnumbermber} is an Armstrong number`);
} else {
    console.log(`${armnumber} is not an Armstrong number.`);
}
console.log("==========================================");

//19) program to find Armstrong number between intervals

// take an input
const lowNumber = 50;
const highNumber = 150;

console.log(" Armstrong Numbers:");

// looping through lowNumber to highNumber
for (let i = lowNumber; i <= highNumber; i++) {
    // converting number to string
    let numberOfDigits = i.toString().length;
    
    let asum = 0;
    
    // create a temporary variable
  let armstemp = i;
  
  /* loop through a number to find if 
  a number is an Armstrong number */
  while (armstemp > 0) {
      let remainder = armstemp % 10;
      asum += remainder ** numberOfDigits;
      // removing last digit from the number
      armstemp = parseInt(armstemp / 10); // convert float into integer
    }
    
    if (asum == i) {
        console.log(i);
    }
}
console.log("==========================================");

// 20) JavaScript Program to Make a Simple Calculator
console.log(" Simple Calculator");
function tryCalculator() {
    // program for a simple calculator
    
    // take the operator input
    const operator = prompt("Enter operator ( either +, -, * or / ): ");
    
    // take the operand input
    const number1 = parseFloat(prompt("Enter first number: "));
    const number2 = parseFloat(prompt("Enter second number: "));
    
    let result;
    
    // using if...else if... else
    if (operator == "+") {
        result = number1 + number2;
    } else if (operator == "-") {
        result = number1 - number2;
    } else if (operator == "*") {
        result = number1 * number2;
    } else {
        result = number1 / number2;
    }
    
    // display the result
    console.log(`${number1} ${operator} ${number2} = ${result}`);
    console.log("==========================================");
}
// tryCalculator();

//     result = number1 / number2;
// console.log('tryCalculator', result)

//21) JavaScript Program to Find the Sum of Natural Numbers
console.log("SUM OF NATURAL NUMBERS");
function natural() {
    // take input from the user
    const number = 12;
    
    let sum = 0;
    
    // looping from i = 1 to number
    // in each iteration, i is increased by 1
    for (let i = 1; i <= number; i++) {
        sum += i;
    }
    
    console.log("The sum of natural numbers:", sum);
    console.log("==========================================");
}
natural();

//22) JavaScript Program to Check if the Numbers Have Same Last Digit
function compareDigits() {
    const digitNo = prompt("Waiting for your number of digits?");
    let splitedArray = digitNo.split("");
    
    for (let i = 1; i <= splitedArray.length - 1; i++) {
        if (splitedArray[0] === splitedArray[splitedArray.length - 1]) {
            console.log("Same last digits", splitedArray[0]);
        } else {
            console.log("don't have same last digits");
        }
    }
}
console.log("==========================================");
// compareDigits()

// 23) JavaScript Program to Find HCF or GCD
function hcf() {
    let hcf;
    // take input
    const number1 = 10;
    const number2 = 90;
    
    // looping from 1 to number1 and number2
    for (let i = 1; i <= number1 && i <= number2; i++) {
        // check if is factor of both integers
        if (number1 % i == 0 && number2 % i == 0) {
            hcf = i;
        }
    }
    
    // display the hcf
    console.log(`HCF of ${number1} and ${number2} is ${hcf}.`);
    console.log("==========================================");
}
hcf();

//24) JavaScript Program to Find LCM
console.log("JavaScript Program to Find LCM");

function findLCM() {
    const num1 = 60;
    const num2 = 90;
    
    // higher number among number1 and number2 is stored in min
    let min = num1 > num2 ? num1 : num2;
    
    // while loop
    while (true) {
        if (min % num1 == 0 && min % num2 == 0) {
            console.log(`The LCM of ${num1} and ${num2} is ${min}`);
            break;
        }
        min++;
    }
}
// findLCM();
console.log("==========================================");

// 25) JavaScript Program to Find the Factors of a Number
function factorialNumber() {
    const num = 10;
    
    console.log(`The factors of ${num} is:`);
    console.log("==========================================");
    
    // looping through 1 to num
    for (let i = 1; i <= num; i++) {
        // check if number is a factor
        if (num % i == 0) {
            console.log(i);
        }
    }
}
// factorialNumber();

//26) JavaScript Program to Find Sum of Natural Numbers Using Recursion
function recurciveNatural() {
    function sum(num) {
        if (num > 0) {
            return num + sum(num - 1);
        } else {
            return num;
        }
    }
    // take input from the user
    
    const number = 20;
    const result = sum(number);
    console.log(`The sum is ${result}`); // display the result
}
console.log("==========================================");

//27) JavaScript Program to Guess a Random Number
// program where the user has to guess a number generated by a program

function guessNumber() {
    
    // generating a random integer from 1 to 10
    const random = Math.floor(Math.random() * 10) + 1;
    
    console.log("Generated random number is",random);
}
// call the function
guessNumber();
console.log("==========================================");
