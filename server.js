// const http = require("http");
// http
//   .createServer((req, resp) => {
//     resp.write("server created");
//     resp.write("<h1>hello node</h1>");
//     resp.end("end the server");
//   })
//   .listen(4700);

// const http = require("http");

// http
//   .createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.write("server created<br>");
//     res.write("<h1>Hello</h1>");
//     res.end("end the server");
//   })
//   .listen(4800, () => {
//     console.log("Server running on http://localhost:4800");
//   });

const http = require("http");
http
  .createServer((req, resp) => {
    resp.write(
      "<h1>When we use h1 tag then it is mandatory to use in the string</h1>"
    );
    resp.end("");
  })
  .listen(6333);
