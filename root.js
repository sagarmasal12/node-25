const http = require("http");

http.createServer((req,res)=>{
    res.write("Hello Node")
    res.end()
}).listen(4800,()=>{
    console.log("Port Run:- http://localhost:4800")
})