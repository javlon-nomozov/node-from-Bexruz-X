const express = require("express");
const path = require("path");

const logger = require("./middlewares/logger");

app = express();

app.use(logger);

// api body parser
app.use(express.json());
// form lardan kelgan malumotlarni olish uchun parser
app.use(express.urlencoded({ extended: false }));

// homepage
app.get("/", (req, res) => {
  res.redirect("/api/books");
  //   res.send('<a href="/api/books"></a>');
});

// Books api uchun router
app.use("/api/books", require("./routes/apis/books"));

// public papkani statik fayllar uchunligini ko'rsatish
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
  console.log(`Server runnig on http://localhost:${PORT}`)
);
