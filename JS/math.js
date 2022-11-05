console.log(Math.round(5.5));
console.log(Math.abs(-5.5));
console.log(Math.ceil(5.3));
console.log(Math.floor(3.9));
console.log(Math.min(23, 45, 54, 6, 99, 8));
console.log(Math.max(23, 45, 54, 6, 99, 8));
console.log(Math.sqrt(169));
console.log(Math.random());
console.log(Math.round(Math.random() * 10 + 1));

// JSON
// Deep Copy
let person = {
  fname: "Ajay",
  lname: "Kumar",
  address: {
    pincode: 560089,
    city: "Bangalore",
  },
};
// to take a deep copy
// JSON.stringify -> to convert js to JSON
let stringifiedObject = JSON.stringify(person);
console.log("stringifiedObject", stringifiedObject);

// JSON.parse=> to convert from JSON to JS
let personcopy = JSON.parse(stringifiedObject);
console.log("personcopy", personcopy);

person.address.pincode = 123456;

console.log("person after change", person);
console.log("personcopy after change", personcopy);

// spread operator
let person1 = {
  fname: "Ankit",
  lname: "Kumar",
  address: {
    pincode: 560089,
  },
  eyeColor: "Blue",
};

let personcopy1 = { ...person1 };
person1.eyeColor = "Brown";
console.log("person1", person1);
console.log("personcopy1", personcopy1);

let person2 = {
  fname: "Ankit",
  lname: "Kumar",
};

let address = {
  pincode: 560089,
};

// combine 2 objects by using spread operator

let personAdress = { ...person2, ...address };
console.log("personAdress", personAdress);
console.log("======================================");

// combine 2 array by using spread operator
let arr1 = [10, 309, 40, 40];
let arr2 = [41, 3, 43, 54, 2];

let arr12 = [...arr1, ...arr2];
console.log("arr12", arr12);
console.log("======================================");

// Rest parameter => nums is an array which can hold n nos. of arguments
function sum(...nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    console.log(sum);
}

sum(19, 60, 44, 54, 3);

console.log("======================================");
// Default parameter
function greet(name="test Yantra"){
    console.log("hello",name)
}
greet("teja")
console.log("======================================");

// object Destructuring

let p={
    fname: "teja",
    lname: "abhi",
    address1 : {
        state:"goa",
        pincode: 560089,
    },
    hobbies:["singing","Dancing","Traveling","cooking","bird watching"],
}

//   while Destructuring object key should be same
let {fname,lname,address1:{state,pincode},hobbies}=p

console.log("fname",fname)
console.log("lname",lname)
console.log("pinCode",pincode)
console.log("hobbies",hobbies[1])
console.log("======================================");

// having same key name then we can have to give alias name
let p2={
    fname: "nandan",
    lname: "nayaka",
    address1 : {
        state:"goa",
        pincode: 560089,
    },
    hobbies:["singing","Dancing","Traveling","cooking","bird watching"],
}
let {fname:firstName,lname:lastName}=p2
console.log("first",firstName)
console.log("last",lastName)

//   array Destructuring
let a=["singing","Dancing","Traveling","cooking","bird watching"]
let [hob1,hob2,hob3]=a
console.log("hob1",hob1)

// navigator.geolocation.getCurrentPosition((data) => console.log(data));
// console.log("location",location)
// console.log("history",history)
// console.log("navigator",navigator)
console.log("======================================");

// alert
window.alert("hi how r u")

// confirm
// let isEligible=confirm("r u above 18?")
// if(isEligible){
//     console.log("Eligible to vote")
// }else{
//     console.log("not eligible to vote")
// }

// // prompt
// let age = prompt("Enter ur age")
// console.log("age",age)
// if(age>18){
//     window.open("https://developer.mozilla.org/en-US/")
// }else{
//     window.open("https://www.firstcry.com/")
// }