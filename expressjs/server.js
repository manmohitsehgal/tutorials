const express = require("express");
const path = require("path");
const fs = require("fs");
const heros = require("./hero.json");
const app = express();
const mysql = require("mysql2");

app.use(express.static("public"));
app.use(express.json());

const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "",
    database: "inventory_db"
  },
  console.log(`Connected to the inventory_db database.`)
);

db.query("show databases", function(err, results) {
  console.log(results);
});

db.query("SELECT * FROM books", function(err, results) {
  console.log(results);
});

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "/index.html")));

app.get("/api/getHero/:id", (req, res) => {
  // goes the logic to get the id
  if (req.body && req.params.id) {
    console.log(typeof req.params.id);
    for (let i = 0; i < heros.length; i++) {
      if (heros[i].id === parseInt(req.params.id)) {
        res.json(heros[i]);
        return;
      }
    }
    res.json("no hero id found");
  }
});

app.post("/api/addHero", (req, res) => {
  const { username, heroClass } = req.body;
  console.log(username, heroClass);

  const heroObjectInPlay = {
    id: generateRandom(9000),
    username,
    heroClass
  };

  fs.readFile("./hero.json", "utf-8", (err, data) => {
    let heros = JSON.parse(data);
    heros = [...heros, heroObjectInPlay];
    console.log(heros);
    fs.writeFile("./hero.json", JSON.stringify(heros), err => {
      // if(err){
      //   console.log("Err")
      // }
      // else{
      //   console.log("Updated hero files")
      // }

      // condition ? truthy : falsy
      err ? console.log("err") : console.log("Updated Heros File");
    });
  });

  const response = {
    status: "success",
    body: heroObjectInPlay
  };

  res.json(response);
});

generateRandom = max => {
  return Math.floor(Math.random() * max);
};

app.listen(3001);
