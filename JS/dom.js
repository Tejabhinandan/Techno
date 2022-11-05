let element = document.getElementById("test");
console.log("element", element);

// element.innerHTML="<button>good Morning</button>"
// element.innerText="<button>good Morning</button>"
element.style.color = "blue";

let pTag = document.createElement("p");
pText = pTag.innerText = "Something is written inside p tag";
// document.write(pText);
document.write((pText = pTag.innerText = "Something is written inside p tag"));

let carElement = document.querySelector(".demo");
console.log(carElement);

let democlass = document.querySelectorAll(".demo");

let pElement = document.getElementsByTagName("p");
console.log(pElement);

let randomText = document.getElementById("randomText");
console.log(randomText);

// we can do modify to css property when there is external css also
// IN classname we can provied n number of class but we dont do that coz v have classlist so we can give n nums of classname in it
randomText.className = "randomStyle randomStyle1";
randomText.classList = "randomStyle randomStyle1";

