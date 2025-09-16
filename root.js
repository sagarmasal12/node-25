const http = require("http");
const userForm = require('./userForm')

http.createServer((req,res)=>{
    userForm(req,res);
    res.end()
}).listen(4800,()=>{
    console.log("Port Run:- http://localhost:4800")
})