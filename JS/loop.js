// For of loop

var fruits=["mango","apple","banana","kiwi","lichi",134,,]

for(var oneFruits of fruits){
    console.log("fruits", oneFruits)
}
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++")

var bikes = ["Ducati", "Ninja", "tiger", "harley", "rx 100"];
for(var bike of bikes){
    console.log("bikes", bike)
}
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++")

// For in loop


var fruits1={
    fruit1:"apple",
    fruit2:"mango",
    fruit3:"Banana",
    fruit4:"Grapes",
}

for(var key in fruits1){
    console.log(`key is ${key} value is ${fruits1[key]}`);
}
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++")


// for in loop can also used for array
// ${} is used to access the values
var bikes = ["Ducati", "Ninja", "tiger", "harley", "rx 100"];
for(var index in bikes){
    console.log(`bikes in ${index} => ${bikes[index]}`)
}

