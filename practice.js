const http = require("http");

http
  .createServer((req, res) => {
    res.end();
  })
  .listen(6200, () => {
    console.log("Port Running:- http://localhost:6200");
  });
