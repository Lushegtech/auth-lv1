import express from "express";
import bodyParser from "body-parser";
import pkg from 'pg';

// Importing the 'pg' package which is a PostgreSQL client for Node.js
// 'pkg' is the object that contains all the exported modules from the 'pg' package
// Using 'pkg' allows us to access all the modules and functionalities provided by 'pg' in a single object

const app = express();
const port = 3000;

const {Pool} = pkg;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {

  const email = req.body.username;
  const password = req.body.password;

  // console.log(username);
  // console.log(password);
});

app.post("/login", async (req, res) => {

  const email = req.body.username;
  const password = req.body.password;

  // console.log(username);
  // console.log(password);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
