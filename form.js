// const http = require("http");

// http
//   .createServer((req, resp) => {
//     resp.writeHead(200, { "Content-Type": "text/html" });
//     resp.write("<h1>Home Page</h1>");

//     if (req.url == "/") {
//       resp.write(
//         `<form action="/submit" method= "post">
//         <input type="text" name="Name" placeholder="Enter Name">
//         <input type="text" name="email" placeholder="Enter Email">
//         <button>Submit</button>
//         </form>`
//       );
//     } else if (req.url == "/submit") {
//       resp.write("<h1>Data Submitted</h1>");
//     }

//     resp.end();
//   })
//   .listen(6200, () => {
//     console.log("port running to:- http://localhost:6200");
//   });

// ---------------------------------------------------------------
// if we use another html file then how to do the code

const http = require("http");
const fs = require("fs");
const { buffer } = require("stream/consumers");
const queryString = require("querystring");

http
  .createServer((req, resp) => {
    // resp.writeHead(200, { "Content-Type": "text/html" });
    fs.readFile("html/web.html", "utf-8", (error, data) => {
      if (error) {
        resp.writeHead(500, { "Content-Type": "text/plain" });
        resp.end("Internal Server Error");
        return;
      }
      resp.writeHead(200, { "Content-Type": "text/html" });

      if (req.url == "/") {
        resp.write(data);
      } else if (req.url == "/submit") {
        // resp.write("<h1>Data Submitted</h1>");
        let dataBody = [];
        req.on("data", (chunk) => {
          dataBody.push(chunk);
        });

        req.on("end", () => {
          let rawdata = Buffer.concat(dataBody).toString();
          //   console.log(rawdata);
          let readableData = queryString.parse(rawdata);
          console.log(readableData);
        });
        resp.write("data submitted");
      }
      resp.end();
    });
  })
  .listen(6300, () => {
    console.log("port run:- http://localhost:6300");
  });
