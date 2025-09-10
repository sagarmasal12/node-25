// const arg = process.argv;
// console.log("-----------", arg);

const http = require("http");
const arg = process.argv;
const port = arg[2];

http
  .createServer((req, res) => {
    res.write("<h1>Testing the Port ...</h1>");
    res.write("<h2>this is test page</h2>");
    res.end();
  })
  .listen(port);
