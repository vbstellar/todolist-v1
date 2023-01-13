const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

var items = ["Buy Food", "Cook Food", "Eat Food"];

app.get("/", function (req, res) {
  var today = new Date();

  var options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  var day = today.toLocaleDateString("en-US", options);

  res.render("list", { weekDay: day, itemArray: items });
});

app.post("/", function (req, res) {
  var item = req.body.newInput;
  items.push(item);
  res.redirect("/");
});

app.listen(3000, () => {
  console.log("Server is up and running on the port 3000");
});
