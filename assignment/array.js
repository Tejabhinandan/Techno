var a = ["teja", 123, true, null, ,];
for (var a1 of a) {
  console.log("1st prgm", a1);
}
console.log("+++++++++++++++++++++++++++++++++");
var b = ["abhi", 456, false, null, ,];
for (var b1 of b) {
  console.log("2st prgm", b1);
}
console.log("+++++++++++++++++++++++++++++++++");
var c = ["abhi", 789, true, , null];
for (var c1 of c) {
  console.log("3rd prgm", c1);
}
console.log("+++++++++++++++++++++++++++++++++");
var d = ["nandan", 1010, , false, null];
for (var d1 of d) {
  console.log("4th prgm", d1);
}
console.log("+++++++++++++++++++++++++++++++++");
var e = ["nayaka", 1010, , false, null];
for (var e1 of e) {
  console.log("5th prgm", e1);
}

console.log("+++++++++++++++++++++++++++++++++");
var fruits = {
  name: "Mango",
  price: 100,
};
for (var key in fruits) {
  console.log(`1st prgm ${fruits[key]}`);
}
console.log("+++++++++++++++++++++++++++++++++");
var bike = {
  name: "Rx100",
  price: 100000,
};
for (var bikes in bike) {
  console.log(`2st prgm ${bike[bikes]}`);
}
console.log("+++++++++++++++++++++++++++++++++");
var cars = {
  name: "BMW",
  price: 10000000,
};
for (var car in cars) {
  console.log(`3rd prgm ${cars[car]}`);
}
console.log("+++++++++++++++++++++++++++++++++");
var books = {
  name: "JAVA",
  price: 180,
};
for (var book in books) {
  console.log(`4th prgm ${books[book]}`);
}
console.log("+++++++++++++++++++++++++++++++++");
var z = {
  name: "xzy",
  price: 1009,
};
for (var z1 in z) {
  console.log(`5th prgm ${z[z1]}`);
}
console.log("+++++++++++++++++++++++++++++++++");

console.log("1st qun");
var a = ["teja", 123, true, null, ,];
for (i = 0; i < a.length; i++) {
  console.log("1st prgm", a[i]);
}
console.log("+++++++++++++++++++++++++++++++++");
var b = ["abhi", 456, false, null, ,];
for (i = 0; i < b.length; i++) {
  console.log("2nd prgm", b[i]);
}
console.log("+++++++++++++++++++++++++++++++++");
var c = ["abhi", 789, true, , null];
for (i = 0; i < c.length; i++) {
  console.log("3rd prgm", c[i]);
}
console.log("+++++++++++++++++++++++++++++++++");
var d = ["nandan", 1010, , false, null];
for (i = 0; i < d.length; i++) {
  console.log("4th prgm", d[i]);
}
console.log("+++++++++++++++++++++++++++++++++");
var e = ["nayaka", 1010, , false, null];
for (i = 0; i < e.length; i++) {
  console.log("5th prgm", e[i]);
}
console.log("+++++++++++++++++++++++++++++++++");

var firstDisplay = (a) => {
  console.log("i am 1st");
  a(name);
};
var SecondDisplay = (me) => {
  console.log(`i am 2nd ${me}`);
};
firstDisplay(SecondDisplay);

function rev(string){
    var a=""
    for(var i=0;i<string.length;i++)
    {
        var b=string.charAt(i)
        a=b+a
    }
    console.log(a)
}
rev("teja")