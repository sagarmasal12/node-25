const http = require("http");
const fs = require("fs");

http
  .createServer((req, resp) => {
    fs.readFile("html/web.html", "utf-8", (err, data) => {
      if (err) {
        resp.writeHead(500, { "Content-Type": "text/plain" });
        resp.writable("internal server error");
        resp.end();
      }
      resp.writeHead(201, { "Content-Type": "text/html" });
      resp.write(data);
      resp.end();
    });
  })
  .listen(3200);
