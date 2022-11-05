let http = require('http')
let url=require('url')
let port= 7000

http.createServer((request, response)=>{
    let requrl=url.parse(request.url,true)
    // parsing the url by url module to separate path and to convert query string as an object
    // http://localhost:7000/?id=123&name=teja we have to give like this ? is to start object and & is used to for next object
    console.log("reqUrl",requrl)
    console.log("query String",requrl.query)
    response.write(JSON.stringify(requrl.query))
    response.end("\n Hello")
})

.listen(port,()=>{
    console.log(`server listening ${port}`)
})