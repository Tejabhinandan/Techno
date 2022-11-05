let http= require('http')
let handler= require('./handler')
let port=9000

http.createServer(handler.requestHandler)
.listen(port,()=>{
    console.log(`listening to port ${port}`)
})