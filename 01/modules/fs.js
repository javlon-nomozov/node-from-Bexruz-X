const fs = require("fs");
const path = require("path");

/*
// Mkdir papka yaratish uchun
fs.mkdir(path.join(__dirname, "/newFolder"), {}, (err) =>
  console.log(err ? err : "Papka yaratildi")
);
// WriteFile
fs.writeFile(
  path.join(__dirname, "/newFolder", "note.txt"),
  "Bu fayl fs moduli orqali yaratildi",
  (err) => (err ? console.log(err) : console.log("Fayl yaratildi"))
);

fs.writeFile(
  path.join(__dirname, "/newFolder", "note.txt"),
  "USTIGA YOZILDI",
  (err) => (err ? console.log(err) : console.log("Fayl yaratildi"))
);

// AppendFile faylni davomidan qo'shib ketishi uchun
fs.appendFile(
  path.join(__dirname, "/newFolder", "note.txt"),
  " Ortidan qo'shildi",
  (err) => (err ? console.log(err) : console.log("Fayl yaratildi"))
);
*/

// ReadFile fanlni o'qish
fs.readFile(
  path.join(__dirname, "/newFolder", "note.txt"),
  "utf-8",
  (err, data) => (err ? console.log(err) : console.log(data))
);

// Rename
fs.rename(
  path.join(__dirname, "/newFolder", "note.txt"),
  path.join(__dirname, "/newFolder", "newNote.txt"),
  (err) => console.log(err)
);
