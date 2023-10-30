const http = require("http");

const port = 3000;
const hostname = "tinch.uz";

http
  .createServer((req, res) => res.end("!Hello world!"))
  .listen(port, () =>
    console.log("server running on: " + "http://localhost:" + port)
  );
