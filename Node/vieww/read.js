let http=require('http')
let fs=require('fs')
let port=7000;

http.createServer((request,response)=>{
    if(request.url==='/' && request.method==='GET'){
        fs.readFile('./viewW.txt',(err,data)=>{
            if(err){
                response.writeHead(404,{
                    "content-type":"text/Plain"
                })
            response.end("File not found")
        }else {
            response.writeHead(200,{
                "content-type":"text/html" 
            })
            response.end(`<h1>${data}</h1>`)
        }
    })

}else {
    response.writeHead(404,{
        "content-type":"text/Plain"
    })
    response.end("Invalid URL or invalid HTTP method")
}
    })
.listen(port,()=>{
    console.log(`server listening on port ${port}`);
})