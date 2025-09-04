const http = require("http");

http
  .createServer((req, res) => {
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h1>Home Page</h1>");
      res.end("Welcome to Home");
    } else if (req.url === "/about") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h1>About Page</h1>");
      res.end("This is the About Page");
    } else if (req.url === "/contact") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h1>Contact Page</h1>");
      res.end("You can contact us at: contact@example.com");
    } else {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end("<h1>404 Page Not Found</h1>");
    }
  })
  .listen(4800, () => {
    console.log("✅ Server running at http://localhost:4800/");
  });
