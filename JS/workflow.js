// workflow of js
function first(){
    setTimeout(()=>{
        console.log("first function")
    },1000)

    console.log("test ur brain")
}

function second(){
    console.log("second function")
}

function third(){
    setTimeout(()=>{
        console.log("test ur brain 2")
    },3000)
    console.log("third function")
}

first()
second()
third()

// scopes
var a=10; //global
var a=30
console.log("global A",a);

function one (){
    var a=20; //local
    a=30;
    console.log("one",a)
}
one();

for(var i=1;i<=5;i++){
    console.log(i)
}
console.log(i);
console.log("===============================")

// ES6 => let and const
// console.log("global B",b);
// workflow.js:44 Uncaught ReferenceError: Cannot access 'b' before initialization
//     at workflow.js:44:24
let b=30;
b=40;
console.log("global B",b);

function accessLocal(){
    let b=30;
    console.log("accessLocal",b);
}


for(let i=1;i<=5;i++){
    console.log(i)
}
console.log(i);
console.log("===============================")

// // const
// console.log("global C",c)
// workflow.js:64 Uncaught ReferenceError: c is not defined
//     at workflow.js:64:24

// const c= 50;
// c=30;
// console.log("global C",c)
// workflow.js:69 Uncaught TypeError: Assignment to constant variable.

// function constFunc(){
//     const c=50;
//     console.log("global C",c)
// }
// constFunc();

// for(const i=1;i<=6;i++){
//     console.log(i)
// }

//  MUTABLE &IMMUTABLE
// Primitive datatypes are immutable

let name="HunnyBunny"
let name1=name
console.log("name",name)
console.log("name1",name1)

name="raju"
console.log("name",name)
console.log("name1",name1)

// Reference datatypes are mutable

let person={
    firstName:"Jonny",
    lastName:"Bravo",
    age:18
}
console.log("person",person)

let person1=person
console.log("person1",person1)

person.firstName="Sunny"
console.log("person",person)
console.log("person1",person1)

person1.lastName="Deol"
console.log("person",person)
console.log("person1",person1)
console.log("====================================")

// Object.assign to copy the object shallow copy

let car={
    barnd:"BMW",
    model:2022,
    color:"blue",
}
let car1=Object.assign({},car);
console.log("car",car)
console.log("car1",car1)

car1.color="white"
console.log("car",car)
console.log("car1",car1)
console.log("====================================")

// array
// example for mutable
let arr=["Mango","Apple","Kiwi","Grapes","Lichi"]
let arr1=arr

console.log("arr",arr)
console.log("arr1".arr1)
arr[0]="Banana"

console.log("arr",arr)
console.log("arr1".arr1)
console.log("====================================")

// example for immutable
let hobby=["singing","Dancing","cooking","Travelling","Bird watching"]
let hobbyCopy=hobby.slice(0)

console.log("hobby",hobby)
console.log("hobbyCopy",hobbyCopy)

hobby.push("fishing")
console.log("hobby after fishing",hobby)
console.log("hobbyCopy after fishing",hobbyCopy)
console.log("====================================")


// String Method
let str="hhello"
// 1 toUpperCase
let uppercase=str.toUpperCase()
console.log(`uppercase - ${uppercase}`)

// tolowercase
let lowercase=str.toLowerCase()
console.log(`lowercase - ${lowercase}`)

// concat
let concat=str.concat(",goodmorning")
console.log(`concat - ${concat}`)

// substring
let substring=str.substring(0,4)
console.log(`substring - ${substring}`)

// substr
let substr=str.substr(0,4)
console.log(`substr - ${substr}`)

// charAt
let charat=str.charAt(4)
console.log(`charat - ${charat}`)

// indexof
let indexof=str.indexOf("o")
console.log(`indexof - ${indexof}`)

// replace
let replace=str.replace("h","H")
console.log(`replace - ${replace}`)

// replaceall
let replaceall=str.replaceAll("l","L")
console.log(`replaceall - ${replaceall}`)

// split
let split=str.split("")
console.log("split",split)

// includes
let includes=str.includes("0")
console.log(`includes - ${includes}`)

// trim
let text="            teja             "
let tr=text.trim()
console.log(`tr output - ${tr}`)

let trStart=text.trimStart()
console.log(`trStart- ${trStart}`)

let trEnd=text.trimEnd()
console.log(`trEnd- ${trEnd}`)
console.log("====================================")

// reverse
let rev="teja abhi"
let r=rev.split("").reverse().join("")
console.log(`Reverse a string- ${r}`)
console.log("====================================")

// slice
let text1="something is there"
let slice=text1.slice(1,4)
console.log("slice",slice)
console.log("====================================")