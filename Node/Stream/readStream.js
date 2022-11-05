let fs= require('fs')
let readStream=fs.createReadStream('./view.txt',{
    // waterMark specifies the bytes to read in each chunk
    highWaterMark:12
})

readStream.on('open',()=>{
    console.log("stream opended")
})
readStream.on('data',(chunk)=>{
    console.log("chunk:",chunk.toString())
})
readStream.on('end',()=>{
    console.log("================================================")
    console.log("stream ended")
})
readStream.on('error',(err)=>{
    console.log("error happended",err)
})

