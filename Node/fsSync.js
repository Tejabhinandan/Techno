let fs =require('fs')
console.log("fs",fs)

// create a folder
if (!fs.existsSync("demo")){
    fs.mkdirSync("demo")
}

// write in file
fs.writeFileSync("demo/test.txt","Hello world...!")

// to edit
fs.appendFileSync('demo/test.txt',"updated")

// Reading from a file
if(fs.existsSync("demo")){
    let readFromFile=fs.readFileSync("demo/test.txt")
    // it provids buffer data
    console.log("data from test",readFromFile)
    // to convert buffer data to readable us tostring()
    console.log("data from test",readFromFile.toString())
}else{
    console.log("no folder found ")
} 


        