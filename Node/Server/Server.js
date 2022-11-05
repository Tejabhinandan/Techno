let http= require ('http')
let port=1000
let server=http.createServer((request,response)=>{
    console.log("req",request)
    response.write("Hello world ")
    response.write("teja")
    response.end()
    // if(request.url==="/"){
    //     response.write("home")
    //     response.end()
    // }if(request.url==="/login"){
    //     response.write("welcome to login")
    // response.end()
    // }else{
    //     console.log("first")
    // }
})


server.listen(port,()=>{
    console.log("server is listening")
})