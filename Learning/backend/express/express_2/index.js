const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/profile/:username", (req, res) => {
  
  res.send(`Welcome Mr. ${req.params.username}`);
});

app.get("/profile/:username/:age", (req, res) => {
  
  res.send(`Welcome Mr. ${req.params.username} and your age is ${req.params.age}`);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is Listening on Port ${PORT}`);
});
