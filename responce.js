const http = require("http");

const age = 31;

http
  .createServer((req, resp) => {
    resp.setHeader("Content-Type", "text/html");
    resp.write(
      `
        <html>
        <head></head>
        <body>
        <h1>Learn Something New</h1>
        <h2>Learn Something New</h2>
        <p>This is para for test the break tag used or not here <br> continue this para</p>
        <h2>` +
        age +
        `</h2>
        <h2>` +
        new Date() +
        `</h2>
        </body>
        </html>`
    );
    resp.end("");
  })
  .listen(4800);
