let fs = require ('fs')
let args= process.argv
console.log("args",args)

if(args[2]==='add'){
    // node cmdLineArgs add test.txt hello
    fs.writeFileSync(args[3],args[4])
}else if(args[2]==='remove'){
    //  node cmdLineArgs remove test.txt
    fs.unlinkSync(args[3])
}