const http = require("http");
const fs = require("fs");
const { buffer } = require("stream/consumers");
const queryString = require("querystring");

http
  .createServer((req, resp) => {
    fs.readFile("html/practice.html", "utf-8", (error, data) => {
      if (error) {
        resp.writeHead(500, { "Content-Type": "text/plain" });
        resp.end("Internal server error");
        return;
      }
      resp.writeHead(200, { "Content-Type": "text/html" });
      if (req.url == "/") {
        resp.write(data);
      } else if (req.url == "/submit") {
        let dataBody = [];
        req.on("data", (chunk) => {
          dataBody.push(chunk);
        });
        req.on("end", () => {
          let raw = Buffer.concat(dataBody).toString();
          console.log(raw);
          let readableData = queryString.parse(raw);
          console.log(readableData);
        });
        resp.write("Data Submitted");
      }

      resp.end();
    });
  })
  .listen(6200, () => {
    console.log("Port Running:- http://localhost:6200");
  });
