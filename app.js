const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", function (req, res) {
  var today = new Date();
  if (today.getDate() === 0 || today.getDate() === 6) {
    res.write("<h1>Hurray! today is weekend.</h1>");
  } else {
    res.sendFile(__dirname + "/index.html");
  }
});

app.listen(3000, () => {
  console.log("Server is up and running on the port 3000");
});
