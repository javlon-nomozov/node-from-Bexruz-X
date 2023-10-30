const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Users list");
});

router.get("/new", (req, res) => {
  res.send("User Form");
});

router.post("/:id", (req, res) => {
  res.send(`User id:${req.params.id}`);
});

module.exports = router;
