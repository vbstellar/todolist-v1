const express = require("express");
const bodyParser = require("body-parser");

const app = express();


app.get("/", function(req, res){
    res.send("Hehe");
})

app.listen(3000, ()=>{
    console.log("Server is up and running on the port 3000");
})