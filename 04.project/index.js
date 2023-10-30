const express = require("express");
// const path = require("path");
const { join } = require("path");
const exphbs = require("express-handlebars");
const dotenv = require("dotenv");
app = express();

app.use(express.static("public"));
app.engine(".hbs", exphbs.engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
// Env variables
dotenv.config();

const PORT = process.env.PORT || 5000;
// pastdagi qatorni komentga oldim lekin negadir home pageda index.html faylni qaytaryabdi

app.get("/", (req, res) => {
  // res.send("<h1>Home page</h1>");
  // res.sendFile("/index.html");
  res.render("home", { title: "Home" });
});

app.listen(PORT, () =>
  console.log(`Server running on port:http://localhost:${PORT}`)
);
