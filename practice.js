const http = require("http");
const fs = require("fs");
const { buffer } = require("stream/consumers");
const queryString = require("querystring");
const { log } = require("console");

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
          let dataString =
            "My Name is " +
            readableData.name +
            " and Email is " +
            readableData.email;
          // console.log(dataString);

          // this is synchronous way to create file
          // fs.writeFileSync("text/" + readableData.name + ".txt", dataString);
          // console.log("File created");

          // this is asynchronous way to create file
          fs.writeFile(
            "text/" + readableData.name + ".txt",
            dataString,
            "utf-8",
            (err) => {
              if (err) {
                resp.end("Internal Server Error");
              } else {
                console.log("File Created");
              }
            }
          );
          console.log("File Created");
        });
        resp.write("Data Submitted");
      }

      resp.end();
    });
  })
  .listen(6200, () => {
    console.log("Port Running:- http://localhost:6200");
  });
