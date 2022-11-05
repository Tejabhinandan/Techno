

// CRUD operation by using http method

//1. GET method
let http = require("http");
let url = require("url");
let fs = require("fs");
port = 2000;

let newServer = http.createServer((request, response) => {
  if (request.url==='/'&& request.method==='GET') {
    // response.write("Home page by GET Method");
    fs.readFile('./demo/view.txt', (err, data) => {
      if (err) {
        response.writeHead(400, { 
          "content-type": "text/plain"
         });
        response.end("page not found");
      } else {
        response.writeHead(400, { 
          "content-type":"text/html"
         });
        response.end(`<h2>${data}</h2>`);
      }
    });
  } else  {
    // posting data from browser directely
    let POSTMETHOD = url.parse(request.url, true);
    console.log(POSTMETHOD);

    // data we are storing in json format that we can send
    response.end(JSON.stringify(POSTMETHOD.query))
    response.writeHead(404,{
      "content-type":"text/plain"
  })
  response.end("invalid url or invalid http method")
  }

  //Deleting some data by using unlink method

  // fs.unlinkSync();

});

newServer.listen(port, () => {
  console.log(`port is successfully running on the port ${port}`);
});