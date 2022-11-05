let num = 3;
let isprime = true;

if (num === 1) {
  console.log("the num is not a prime or composite num -", num);
} else if (num > 1) {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      isprime = false;
      break;
    }
  }
  if (isprime) {
    console.log("the given num is prime -", num);
  } else {
    console.log("the given is not a prime -", num);
  }
}
// fibonacci number

function fibonacci(n) {
  let a = 0;
  let b = 1;
  let  temp;
  for (i = 1; i <= n; i++) {
      console.log(a);
      let sum = a + b;
      a = b;
      b = sum;
  }
}
fibonacci(10);

let name="tejabhinandan"
let rev=""
for(i=name.length-1;i>=0;i--){
    // let nam=name[i]
    rev=rev+name[i]
}
console.log(rev)

// fliter
let z=[12,39,49,11,12,46,45,45,4546,46,64]
let remove=z.filter((val,ind)=>{
  return z.indexOf(val)==ind
})
console.log(z)
console.log(remove)

console.log("// Callback function");
function test(something) {
  console.log("im 1st");
  something();
}
function sample() {
  console.log("i m 2nd");
}
test(sample);


let add=(a1)=>{
  return function(a2){
    console.log(a1+a2)
    return function(){
      return console.log(a1*a2)
    }
  }
}
add(10)(23)(40)

let s="teja abhi nandan"
let s1=s.split(" ")
console.log(s1)
let reversearray=""
for(let i=0;i<s1.length;i++){
 let name=s1[i];
  reversearray=reversearray+" "+name.split("").reverse().join("")
}
console.log(reversearray);

// console.log(s1)

// programme no 1  hello word in javscript

// console.log("Hello world")
// alert("hello world")
// document.write("hello world")

// programme no 2 programme to add two numbers

// function add(a,b){
//     return console.log( a+b);
// }
// add(2,3)

// programme no 3 programme to find a square root

// let a=parseInt(prompt("enter the number to calculate square root"))
// function squareroot()
//     {
//         return console.log(Math.sqrt(a))
//     }
//     squareroot()

// programme no 3 programme to find area of triangle

// let base=parseInt(prompt("enter base of a triangle"))
// let height=parseInt(prompt("enter height of a triangle"))

// function areaTriangle()
//     {
//         return 1/2*(base*height)
//     }

//     console.log(areaTriangle());

// programme no 4 programme to swipe two numbers
// let a=parseInt(prompt("enter value of a "))
// let b=parseInt(prompt("enter value of a "))
// function swipe(a,b)
//     {
//       let temp=a;
//        a=b;
//        b=temp;
//        console.log(a,b)
//     }

// swipe(a,b);

// let array=[2,3,4,2,8,6]
//     let temp=array[1]

//     array[1]=array[2];
//     array[2]=temp;
//     console.log(array);

// programme to solve quadratic equation solution ax2+bx+c

// let a=parseInt(prompt("enter value of a "))
// let b=parseInt(prompt("enter value of b "))
// let c=parseInt(prompt("enter value of c "))

// function quadratic(a,b,c){
//     let desc=b*b-4*a*c
//     if (desc>0)
//     {
//         root1=(-b+Math.sqrt(desc))/(2*a)
//         console.log(root1)

//         root2=(-b-Math.sqrt(desc))/(2*a)
//         console.log(root2)
//     }else if(desc==0)
//     {
//         root1=root2=(-b/(2*a))

//         console.log(root1,root2)

//     }else {
//         // let root1 = (-b / (2 * a)).toFixed(2);
//         // let root2 = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
//         console.log("descriminant is negative so we can will not get values")

//     }

// }

// quadratic(a,b,c)

// programe to convert km to miles

// let kilometer=parseInt(prompt("enter a number in kilometer to convert in miles "))
// function miles(kilometer)
// {
//     const conv=0.621371
//     return console.log(kilometer*conv) ;

// }
// miles(kilometer)

// programe to convert celsius  to pahrenhit

// let celsius=parseInt(prompt("enter a number in kilometer to convert in miles "))
// function miles(celsius)
// {
//     const conv=33.8
//     return console.log(celsius*conv) ;

// }
// miles(celsius)

// programme to display the random number

// let minvalue=parseInt(prompt("enter the minimun value"))
// let maxvalue=parseInt(prompt("enter the maximum value"))

// let random=Math.floor(Math.random()*(100-1))+1
// console.log(random)

// programme to find number is positive negative or zero

// let number=parseInt(prompt("enter a number to check positive or netave or zero"))
// function check(number)
// {
//     if(number>0)
//     {
//         console.log("entered number is positive")
//     }else if(number<0){
//         console.log("number is negative")
//     }else{console.log("zero")}
// }

// check(number)

// // programme to find odd or even number
// let numb=parseInt(prompt("enter a number to check odd or even"))
// function oddeven(oddeven)
// {
//     if(numb%2==0)
//     {
//         console.log("the entered number even")
//     }else{ console.log("the entered number odd")}
// }

// oddeven(oddeven)

// programme to find lagest number amongt three number

// let num1=parseInt(prompt("enter first number"))
// let num2=parseInt(prompt("enter second number"))
// let num3=parseInt(prompt("enter third number"))

// function largest(num1,num2,num3){
//     if(num1>num2 && num1>num3)
//     {
//         console.log("the largest number is "+num1)
//     }else if(num2>num1 && num2>num3)
//     {
//         console.log("the largest number is "+ num2)
//     }else{
//         console.log("the largest number is "+num3)
//     }
// }

// largest(num1,num2,num3)

// programme to check prime number

// let checkprime = parseInt(prompt("enter a number to prime or not"));

// function prime() {
//   let count = 0;
//   for (i = 0; i <= checkprime; i++) {
//     if (checkprime % i == 0) {
//       count++;
//     }
//   }
//   if (count <= 2) {
//     console.log("entered number is prime number");
//   } else {
//     console.log("entered number is not a prime number");
//   }
// }
// prime(checkprime);

// let checkprime = parseInt(prompt("enter a number to print prime numbers"));

// function prime(checkprime) {
//   for (i = 1; i <= checkprime; i++) {
//     let isPrime = true;

//     for (j = 2; j<i; j++) {
//       if (i % j == 0) {
//         isPrime = false;
//         break;
//       }
//     }
//     if (isPrime) {
//       console.log(i);
//     }
//   }
// }
// prime(checkprime);

// programme to find factorial of number

// let factnumber=parseInt(prompt("Enter a number to find factors"))

// function Factorial(factnumber){

//   let fact=1;
//   for(i=1;i<=factnumber;i++){

//     fact=fact*i;

//   }
//   console.log(fact)

// }
// Factorial(factnumber)

// multipliaction table

// let multtable=parseInt(prompt("Enetr a number to display multiplication table"))

// function multiplication(multtable){
//   for(i=1;i<=10;i++)
//   {
//     res=multtable*i;
//     console.log(multtable + "*" + i + "=" + res)
//   }

// }
// multiplication(multtable)

// programme to find fibonacci series

// let fibonaccinumber=parseInt(prompt("Enter a number to print fibonacci number upto that"))

// function fibonacci(){
//   let a=0,b=1,res;
//   for(i=0;i<=fibonaccinumber;i++){
//     console.log(a)
//     res=a+b;
//     a=b;
//     b=res;

//   }

// }
// fibonacci(fibonaccinumber)

// programme to find armstrong number

// let amstrongnumber = prompt(
//   "Enter a number to find number is armstrong or not"
// );
// let pow;
// let rem;
// let lengthOfNumber = amstrongnumber.length;

// console.log(lengthOfNumber);

// let m = amstrongnumber;
// let sum = 0;
// console.log(m);

// function amstrong(amstrongnumber) {
//   while (m != 0) {
//     rem = m % 10;
//     sum = sum + rem ** lengthOfNumber;
//     m = parseInt(m / 10);
//   }
//   console.log(sum);
// }
// amstrong(amstrongnumber);

// amstrong by interval

// let lower = prompt(
//   "Enter a first number"
// );
// let higher = prompt(
//   "Enter a second number"
// );
// for(i=lower;i<=higher;i++){

//   lengthOfNumber = i.toString().length;

// console.log(lengthOfNumber);

// let m1= i;
// let sum1 = 0;
// // console.log(m1);

// function amstrong() {
//   while (m1 != 0) {
//     rem = m1 % 10;
//     sum1 =rem ** lengthOfNumber;
//     m1 = parseInt(m1 / 10);

//   }
//   console.log(sum1);

// }

// }
// amstrong();

// programme to find sum of natural numbers

// let naturalnumber=parseInt(prompt("enter the natuaral number to find its summation"))
// let natsum=0;
// function naturalsum(){
//          for(i=0;i<=naturalnumber;i++){
//            natsum=natsum+i

//          }
//          console.log(natsum)

// }
// naturalsum()

// programme to find factors of a number

// let factorsnumber=parseInt(prompt("enter to find the factors"))
// let count=0;
// function factors(){
//   for(let i=0;i<=factorsnumber;i++)
//   {
//     if(factorsnumber%i==0)
//     {
//       count++
//     }

//   }
//   console.log(count)
// }
// factors()

// program to find the HCF or GCD of two integers

// const number1 = prompt('Enter a first positive integer: ');
// const number2 = prompt('Enter a second positive integer: ');

// let hcf;
// function hcfnumber(){
// for (let i = 1; i <= number1 && i <= number2; i++) {

//     if( number1 % i == 0 && number2 % i == 0)
//      {
//         hcf = i;
//     }
// }
// console.log(hcf)
// }
// hcfnumber()

// calculator

// let oprand1=parseFloat(prompt("input 1 "))
// let operator=prompt("any operator like + , - , * , / ")
// let oprand2=parseFloat(prompt("input 2 "))
// let res;
// if(operator== "+")
// {
//    res=oprand1+oprand2;
//    console.log(res)
// }else if(operator=="-")
// {
//   res=oprand1-oprand2;
// }else if(operator=="*")
// {
//   res=oprand1*oprand2;
// }else(operator=="/")
// {
//   res=oprand1/oprand2;
// }

// programme to given number is palindrome or not

let n=parseInt(prompt("enter the number"))
m=n;
let rev=0

while(n!=0){

  rem=n%10;
  // console.log(rem)
  rev=(rev*10)+rem;
  n=parseInt(n/10)
  console.log(rev)

// }
// if (rev==m){
//   console.log("given number is palindrome")
// }else{
//   console.log("given number is not a palindrome")
// }

// sorting arrey in acsending and descending order

let sortarray = [20, 10, 20, 10, 60, 20, 10, 80];

// by inbuilt sort method

// let sort1=sortarray.sort((a,b)=>{return a-b})
// console.log(sort1)
// let sort2=sortarray.sort((a,b)=>{return b-a})
// console.log(sort2)

// // by using bubble sort method
// let temp;

// for(i=0;i<=sortarray.length-1;i++){

//   for(j=0;j<=sortarray.length-1;j++){
//     if(sortarray[j] < sortarray[j+1]){
//       temp=sortarray[j]
//       sortarray[j]=sortarray[j+1]
//       sortarray[j+1]=temp
//     }
//   }

// }
// console.log(sortarray)

// to remove duplicates in an given array

// by using array inbuilt method

// duplicate = new Set(sortarray)
// console.log(duplicate)

// dupliactearray=Array.from(duplicate)
// console.log(dupliactearray)

// or

// duplicate1=[...new Set(sortarray)]
// console.log(duplicate1)

// by using filetr method

// let duplicate2=sortarray.filter((val,ind)=>{
//   return sortarray.indexOf(val)==ind
// })
// console.log(duplicate2)

// by using for each method
let newsortarray=[];
  sortarray.forEach((valu,inde)=>{
  if(newsortarray.includes(valu)==false)
  {
    newsortarray.push(valu)
  }
})
console.log(newsortarray)
  
// by using for method

let sortbyfor = [20, 50, 20, 80, 50];

let newsortbyfor = [];

for (i = 0; i <= sortbyfor.length-1; i++) {
  if (newsortbyfor.indexOf(sortbyfor[i]) === -1) {
    newsortbyfor.push(sortbyfor[i]);
  }
}
console.log(newsortbyfor)

