const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

let pLanguages = [];

app.get("/", (req, res) => {
  res.render("index.ejs", { plNames: pLanguages });
});
app.get("/contact", (req, res) => {
  res.render("contact.ejs", {});
});

app.post("/", (req, res) => {
  const pLanguage = req.body.pLanguage;
  pLanguages.push(pLanguage);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`The server is running at http://localhost:${port}`);
});
