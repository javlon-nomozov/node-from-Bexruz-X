const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.readFile(
      path.join(__dirname, "/public", "index.html"),
      (err, content) => {
        if (err) {
          throw err;
        } else {
          res.end(content);
        }
      }
    );
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.readFile(
      path.join(__dirname, "/public", "about.html"),
      (err, content) => {
        if (err) {
          throw err;
        } else {
          res.end(content);
        }
      }
    );
  } else if (req.url === "/hello") {
    res.writeHead(200, { "Content-Type": "application/json" });
    fs.readFile(
      path.join(__dirname, "/public", "hello.json"),
      (err, content) => {
        if (err) {
          throw err;
        } else {
          res.end(content);
        }
      }
    );
  } else if (req.url === "/data") {
    res.writeHead(200, { "Content-Type": "application/json" });
    const students = [
      { name: "Timur", age: 20 },
      { name: "Ali", age: 22 },
      { name: "David", age: 21 },
      { name: "Anesh", age: 22 },
    ];
    res.end(JSON.stringify({ students: students }));
  }
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server running on: ${PORT}`);
});
