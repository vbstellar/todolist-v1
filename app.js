const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

let items = ["Buy Food", "Cook Food", "Eat Food"];

app.get("/", function (req, res) {
  let today = new Date();

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  let day = today.toLocaleDateString("en-US", options);

  res.render("list", { weekDay: day, itemArray: items });
});

app.post("/", function (req, res) {
  let item = req.body.newInput;
  items.push(item);
  res.redirect("/");
});

app.listen(3000, () => {
  console.log("Server is up and running on the port 3000");
});
