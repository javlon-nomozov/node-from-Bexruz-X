const http = require("http");
const uuid = require("uuid");
const fs = require("fs");
const path = require("path");
const getBodyData = require("./util");

// config datas
const hostname = "127.0.0.1";
const port = 3000;

const books = [];
function addBook(name, author, price, sheets) {
  books.push({
    id: uuid.v4(),
    name,
    author,
    price,
    sheets,
  });
}
function getBook(id) {
  let book;
  books.forEach((el) => {
    if (el.id == id) {
      book = el;
    }
  });
  return book;
}

addBook("Node js asoslari", "Falonchayev Pistoncha", 200, 150);

function removeBook(id) {
  books.find((el, i) => {
    el.id == id ? books.splice(i, 1) : undefined;
  });
}

function updateBookInfo(bookId, key, newValue) {
  books.forEach((el, i) => {
    if (el.id == bookId) {
      books[i][key] = newValue;
    }
  });
}

const server = http.createServer(async (req, res) => {
  if (req.url == "/books" && req.method == "GET") {
    res.writeHead(200, { "Content-Type": "application/json charset=utf8" });
    const resp = { status: "OK", books };
    res.end(JSON.stringify(resp));
  } else if (req.url == "/books" && req.method == "POST") {
    res.writeHead(200, { "Content-Type": "application/json charset=utf8" });
    const data = await getBodyData(req);
    const { title, author, price, sheets } = JSON.parse(data);
    const resp = { status: "OK", books };
    addBook(title, author, price, sheets);
    res.end(JSON.stringify(resp));
  } else if (req.url.match(/\/books\/\w+/) && req.method == "GET") {
    const id = req.url.split("/")[2];
    res.writeHead(200, { "Content-Type": "application/json charset=utf8" });
    const resp = { status: "OK", books: getBook(id) ? [getBook(id)] : [] };
    res.end(JSON.stringify(resp));
  } else if (req.url.match(/\/books\/\w+/) && req.method == "PUT") {
    const id = req.url.split("/")[2];
    res.writeHead(200, { "Content-Type": "application/json charset=utf8" });
    const data = await getBodyData(req);
    const { title, author, price, sheets } = JSON.parse(data);
    title ? updateBookInfo(id, "name", title) : undefined;
    author ? updateBookInfo(id, "author", author) : undefined;
    price ? updateBookInfo(id, "price", price) : undefined;
    sheets ? updateBookInfo(id, "sheets", sheets) : undefined;
    const book = books.find((el) => el.id === id);
    const resp = { status: "OK", books: book ? [book] : [] };
    res.end(JSON.stringify(resp));
  } else if (req.url.match(/\/books\/\w+/) && req.method == "DELETE") {
    const id = req.url.split("/")[2];
    res.writeHead(200, { "Content-Type": "application/json charset=utf8" });
    const data = await getBodyData(req);
    const book = books.find((el) => el.id === id);
    removeBook(id);
    const resp = { status: "OK", books: book ? [book] : [] };
    res.end(JSON.stringify(resp));
  } else {
    res.writeHead(404, { "Content-Type": "text/html charset=utf8" });
    fs.readFile(path.join(__dirname, "/public", "404.html"), (err, content) => {
      if (err) {
        throw err;
      } else {
        res.end(content);
      }
    });
  }
});

server.listen(port, () =>
  console.log(
    `Server is running on http://${hostname ? hostname : "localhost"}:${port}`
  )
);
