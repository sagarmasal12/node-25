const http = require("http");
const userForm = require('./userForm')
const userDataSubmit = require("./userDataSubmit")
const queryString = require("querystring")

http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html"})
    if(req.url == "/"){
        userForm(req,res);
    }else if(req.url == "/submit"){
        // userDataSubmit(req,res)
        let dataBody = [];

        req.on("data", (chunk) => {
          dataBody.push(chunk);
        });

        req.on("end", () => {
          let rawdata = Buffer.concat(dataBody).toString();
          console.log(rawdata);
          let readableData = queryString.parse(rawdata);
          console.log(readableData);
         
        });
         res.write(`<h1>Responce Submitted and Save in Console:- ${this.readableData}</h1>`)
         res.end("")
    }
    res.end("")
}).listen(4800,()=>{
    console.log("Port Run:- http://localhost:4800")
})