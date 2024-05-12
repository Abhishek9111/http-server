// const fs = require("fs"); //read file
const express = require("express");
var bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000;
app.get("/test1", (req, res) => {
  res.json({
    name: "Abhishek",
    age: 22,
  });
});
app.post("/test", (req, res) => {
  console.log("test", req.body);
  res.send("test");
});
app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});
