const books = require("../../books");
const { Router } = require("express");
const uuid = require("uuid");

// get all books
router = Router();
router.get("/", (req, res) => {
  res.json(books);
});

// >get one book by id
router.get("/:id", (req, res) => {
  //   res.json(books.filter((book) => book.id == req.params.id)));
  const isExist = books.some((book) => book.id == req.params.id);
  if (isExist) {
    res.json(books.filter((book) => book.id == req.params.id));
  } else {
    res
      .status(404)
      .json({ message: `${req.params.id} id li kitob mavjud emas` });
  }
});

router.post("/", (req, res) => {
  body = req.body;
  if (body.name && body.author && body.pages) {
    res.json(body);
    books.push({ ...body, id: uuid.v4() });
  } else {
    res.status(404).json({ message: "Malumotlardan biri kam" });
  }
});

// >Update a book by id
router.put("/:id", (req, res) => {
  const isExist = books.some((book) => book.id == req.params.id);
  if (isExist) {
    books.find((el, i) => {
      if (el.id == req.params.id) {
        books[i] = { ...req.body, id: el.id };
        res.json(books[i]);
        return true;
      }
    });
  }
  res.status(404).json({ message: "Bu kitob mavjud emas" });
});

// >get one book by id
router.delete("/:id", (req, res) => {
  const isExist = books.some((book) => book.id == req.params.id);
  if (isExist) {
    let result;
    books.forEach((el, i) =>
      el.id == req.params.id ? (result = books.splice(i, 1)) : undefined
    );
    res.json(result);
  } else {
    res
      .status(404)
      .json({ message: `${req.params.id} id li kitob mavjud emas` });
  }
});

module.exports = router;
