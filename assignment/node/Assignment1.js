let  fs=require('fs')

// Sync
if(!fs.existsSync('demo')){
    fs.mkdirSync('demo')
}else{
    console.log("file already exists");
}

fs.writeFileSync('demo/test.txt','Hello World')

let readData= fs.readFileSync('demo/test.txt')
console.log(readData.toString());

try{
    fs.appendFileSync('demo/test.txt',' Good Day')
    console.log("data appended to file successfully");
}catch(err){
    console.log('err',err);
}
// renaming of file name
fs.renameSync('demo/test.txt','demo/view.txt')


// Async
// let displayData=()=>{

// fs.writeFile('demo/test.txt','Hello World',(err)=>{
//     if(err){
//         console.log("err",err);
//     }else{
//         console.log("Data written successful");

//         fs.readFile('demo/test.txt',(err,data)=>{
//             if(err){
//                 console.log("err",err);
//             }else{
//                 console.log(data.toString());
//             }
//         }) 
//     }
// })
// }


// let append=()=>{fs.appendFile('demo/test.txt',' How are you?',(err,data)=>{
//     if(err){
//         console.log("err",err);
//     }else{
//         console.log(data);
//     }
// }) }



// fs.exists('demo',(err)=>{
//     if(!err){
//         fs.mkdir('demo',(err)=>{
//             if(err){
//                 console.log("err",err);
//             }else{
//                 console.log("demo created successfully");
//                 displayData()
//             }
//         })
//     }else{
//         displayData()
//         append()
//     }
// })
// fs.renameSync('demo/test.txt','demo/view.txt',(err)=>{
//     if(err){
//         console.log('err',err);
//     }else{
//         console.log("file rename successful");
//     }
// })

//Third party library 

var Stomp = require('stompjs');

var client = Stomp.overTCP('localhost', 12345);
console.log(client);