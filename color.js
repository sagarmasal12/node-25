var colors = require("colors");
const { log } = require("console");
console.log("I am exploring the color".rainbow);
console.log("I am ecploring the color".rainbow);

const http = require("http");

http
  .createServer((req, resp) => {
    resp.write("<h1>I am using color for the write function in node</h1>");
    resp.end();
  })
  .listen(4500);
