function hideName() {
  let element = document.querySelector("h1");
  console.log("element", element);
  element.style.visibility = "hidden";
}
// function showName() {
//   let element = document.querySelector("h1");
//   console.log("element", element);
//   element.style.visibility = "visible";
// }
// function showHideName() {
//   let element = document.querySelector("h1");
//   if (element.style.visibility == "visible") {
//     element.style.visibility = "hidden";
//   } else {
//     element.style.visibility = "visible";
//   }
// }

// // Addevent listener
// let uniquebtn = document.getElementById("uniquebtn");
// uniquebtn.addEventListener("click", function (event) {
//   console.log("event", event);
//   console.log("uniquebtn is clicked");
// });
// uniquebtn.addEventListener("mouseover", function () {
//   console.log("mouseover on the button");
// });

console.log("start");
// Promise
// let PromiseExample = new Promise(function (resolve, reject) {
//   if (10 > 5) {
//     resolve("10 is greater than 5");
//   } else {
//     reject("10 is smaller than 5");
//   }
// });
// PromiseExample.then(function (resolve) {
//   console.log("result", resolve);
// }).catch(function (reject) {
//   console.log("reject", reject);
// });

// function greet() {
//   console.log("tej");
// }
// console.log("End");
// greet();

// async and await (then and catch) ES-8

// let url = "https://jsonplaceholder.typicode.com/users";

// let api = async () => {
//   try {
//     let response = await fetch(url);
//     let data = await response.json();
//     console.log(response)
//     console.log("data", data);
//   } catch (err) {
//     console.log(err.message);
//   }
// };
// api();
async function fetchposts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    console.log(response);
    const data = await response.json();
    console.log(data);
    let titles = "<ul>";
    data.map((val) => {
       let title = val.title;
        titles += `<li>${title}</li>`;
    });
    titles += "</ul>";
    const ele = document.getElementById("titleData");
    ele.innerHTML = titles;
    console.log("ele",ele);
  } catch (error) {
    console.log(error);
  }
}
fetchposts();

// closure
console.log("closure")
function outer(){
    let n1=20
    return function inner(){
        let sum=n1+40
        return console.log(sum)
    }
}
outer()()

// console.log("LocalStorage")
// let person={
//     fname:"teja",
//     address:"Banglore",
//     pincode:12345
// }
// let stringifiedPerson=JSON.stringify(person)
// console.log("stringifiedPerson",stringifiedPerson)

// localStorage.setItem("Name",stringifiedPerson)

// localStorage.setItem("email","teja@gmail.com")

// let getname= localStorage.getItem("Name")
// console.log("getname",getname)
// document.write(getname)

// let logout=()=>{
// localStorage.clear()
// }
 