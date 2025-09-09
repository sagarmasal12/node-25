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

const { log } = require("console");
const math = require("./math");

console.log("Addition:-", math.addn(45, 60));
console.log("Substraction:-", math.subn(45, 12));

console.log("Multiplication", math.mul(4, 5));
console.log("Division", math.div(6, 2));

const http = require("http");
const { red } = require("colors");
http
  .createServer((req, resp) => {
    resp.write(
      "<p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quisquam fugit, odio rerum inventore officia voluptate temporibus facere quam veritatis iure voluptatibus. Incidunt, saepe cum? Cum ut ea consectetur doloreFacere, quia unde. Voluptatibus vero dolorum placeat ipsa doloremque accusantium explicabo, ab eligendi, mollitia, quam blanditiis rem molestiae officia. Quis ea omnis totam provident. Laudantium illum ab quis id accusamus! Quia odit dolorem, veritatis molestiae, illum magni quisquam atque dolorum rerum ut blanditiis perspiciatis distinctio animi harum similique repellendus tempore rem iusto. Dolores exercitationem quas repellendus perferendis itaque maxime consectetur. Iure hic porro eum, tempora deleniti quia possimus ut unde eos sequi reprehenderit commodi placeat, quidem dignissimos reiciendis officia deserunt iusto dolor? Odio vel nulla ratione repudiandae, tempora voluptatem ut? Laborum fuga veritatis ex voluptas et eaque quia, excepturi distinctio aliquid nam magni quisquam molestiae sunt reprehenderit, expedita aspernatur beatae delectus ipsa quae </p>"
    );

    resp.write("<h1>Today's Topic is - Nodemon, Server and Basic Node</h1>");
    resp.end("");
  })
  .listen(4500);

http
  .createServer((req, resp) => {
    // resp.setHeader("Content-Type");
    // resp.setHeader("Content-Type", "text/html");
    resp.render("<h2>Other Server</h2>");
    resp.end("");
  })

  .listen(4100);
