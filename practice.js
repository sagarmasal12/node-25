// const http = require("http");
// const agv = process.argv[2];
// const port = agv || 3000;
// http
//   .createServer((req, res) => {
//     if (req.url == "/") {
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.write("<h1></h1>");
//       res.write("<h1>Home Page</h1>");
//       res.end("Welcome Home Page");
//     } else if (req.url == "/about") {
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.write("<h1>About Page</h1>");
//       res.end("Welcome about Page");
//     } else if (req.url == "/practice") {
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.write("<h1>Pactice Page</h1>");
//       res.end("Welcome practice Page");
//     } else {
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.write("<h1>Other Page</h1>");
//       res.end("Welcome Other Page");
//     }
//   })
//   .listen(port, () => {
//     console.log(`server runnign at http://localhost:${port}/`);
//   });

// -------------------------------------------------------------------------
