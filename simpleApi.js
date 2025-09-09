const http = require("http");

const users = [
  {
    name: "Sagar",
    age: 21,
    email: "sagar12@gmail.com",
  },
  {
    name: "Rajesh",
    age: 25,
    email: "rajesj203@gmail.com",
  },
  {
    name: "Rahul",
    age: 27,
    email: "rahul@gmail.com",
  },
];

http
  .createServer((req, resp) => {
    // resp.setHeader("Content-Type", "application/json");
    resp.setHeader("Access-Control-Allow-Origin", "*");
    resp.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    resp.setHeader("Access-Control-Allow-Headers", "Content-Type");

    resp.writeHead(200, { "Content-Type": "application/json" });
    resp.end(JSON.stringify(users));
  })
  .listen(6100, () => {
    console.log("node server runnig at http://localhost:6100");
  });
