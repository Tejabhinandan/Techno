var fruits = ["mango", "apple,", "kiwi"];
var books = [
  {
    title: "java",
    price: 500,
  },
  {
    title: "python",
    price: 5000,
  },
  {
    title: "javascript",
    price: 1500,
  },
];
// forEach()
books.forEach((value, index) => {
  return console.log(`price:${value.title}`);
});
console.log("======================================");

// Map()
console.log("map");
books.map((val, idx) => {
  return console.log(val, idx);
});

fruits.map((value, index) => {
  return console.log(`fruitsin in index ${index} is ${value}`);
});
console.log("======================================");

console.log(Array.isArray(books));
console.log("======================================");

// push
var fruits1 = ["mango", "banana"];
var addF = fruits1.push("kiwi", "APPLE");
console.log(fruits1);
console.log("======================================");

// pop
var addE = fruits1.pop();
console.log(fruits1);
console.log("======================================");

var num = [10, 20, 40, 30];

// includes
var hasTwety = num.includes(20);
console.log("hasTwety", hasTwety);
console.log("======================================");

// unshift
var addNu = num.unshift(90);
console.log(num);
console.log(addNu);
console.log("======================================");

// shift
var remove = num.shift();
console.log(num);
console.log(remove);
console.log("======================================");

// splice
var num1 = [10, 20, 30, 40];
var remove30 = num1.splice(2, 1, 60, 80, "hello");
console.log("after splice", num1);
console.log("======================================");

//slice
var num2 = [10, 20, 30, 40, 50, 60];
console.log("before slice", num2);
var slicedElements = num2.slice(1, 5);
console.log("slicedElements", slicedElements);
console.log("after slice", num2);
console.log("======================================");

// indexof
// if element is not there then its shows -1
var num3 = [10, 20, 30, "hello", 40, 50, 60];
console.log("num3", num3);
var indexofHello = num2.indexOf("hello");
console.log("indexofHello =", indexofHello);
num3.splice(indexofHello, 1);
console.log("num3", num3);
console.log("======================================");

var present = num3.indexOf(30);
if (present >= 0) {
  console.log("its present");
} else {
  console.log("not present");
}
console.log("======================================");

// join
var num4 = [10, 20, 30, 40, 50, 60,60];
var hifenNum = num4.join("-");
console.log("hifenNum", hifenNum);
console.log("======================================");

var num4 = [10, 20, 30, 40, 50, 20, 60];
var greaterThan = num4.filter((val, idx) => {
  return val > 30;
});
console.log(greaterThan);
console.log("======================================");

// remove duplicates
var duplicate = num4.filter((va, idx) => {
  return num4.indexOf(va) == idx;
});
console.log(num4);
console.log(duplicate);
console.log("======================================");

let tej=[3,5,7,6,5,2,5,3,5,9,4,5]
// let t=tej.filter((v,i)=>{
//   return v===5
// })
// let w=tej.filter((v1,i)=>{
//   return tej.indexOf(v1)===i;
// })
// w.shift()
// console.log(tej)
// console.log(t)
// console.log(w)
// console.log(w.concat(t))

let arr41=[]
let arr51=[]
        tej.map((val,id)=>{
          if(val==5){
            arr41.push(val)
          }else{
            arr51.push(val)
          }
        })
        console.log(arr51.concat(arr41))




// console.log(1+ +"2"+"2")
// console.log("A"-"B"+2)
// console.log("A"-"B"+"2")
// console.log(+"1"+"2"+"2")
// console.log(5-"2"+"2")
// console.log(5-"2"+2)

