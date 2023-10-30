// // const express = require("express");
// // const app = express();

// // app.listen(3000);
// // app.set("view engine", "ejs");

// // app.get("/", (req, res) => {
// //   //   res.sendStatus(200);
// //   res.redirect("/about");
// //   // res.render("index", { name: "Javlon" });
// // });

// // app.get("/about", (req, res) => {
// //   res.render("index", { name: "Javlon" });
// // });

// // const userRouter = require("./routes/users");

// // app.use("/users", userRouter);

// const arr = [2, 5, 1, 3, 4];

// let max1 = arr[0];
// let max2 = arr[1];
// if (arr[0] > arr[1]) {
//   max1 = arr[0];
//   max2 = arr[1];
// } else {
//   max1 = arr[1];
//   max2 = arr[0];
// }
// for (const num of arr) {
//   if (max1 < num) {
//     max1 = num;
//   }
// }
// for (const num of arr) {
//   if (max2 < num && num !== max1) {
//     max2 = num;
//   }
// }
// console.log(max1);
// console.log(max2);

// const express = require("express");
// const app = express();

// app.listen(3000);
// app.set("view engine", "ejs");

// app.get("/", (req, res) => {
//   //   res.sendStatus(200);
//   res.redirect("/about");
//   // res.render("index", { name: "Javlon" });
// });

// app.get("/about", (req, res) => {
//   res.render("index", { name: "Javlon" });
// });

// const userRouter = require("./routes/users");

// app.use("/users", userRouter);

const arr = [2, 5, 1, 3, 4, 5];

let max1 = arr[0];
let max2 = arr[1];
if (arr[0] > arr[1]) {
  max1 = arr[0];
  max2 = arr[1];
} else {
  max1 = arr[1];
  max2 = arr[0];
}
for (const num of arr) {
  if (max1 < num) {
    max1 = num;
  }
}
for (const num of arr + 1) {
  if (max2 < num && num !== max1) {
    max2 = num;
  }
}
console.log(max1);
console.log(max2);
