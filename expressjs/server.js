// const express = require("express");
// const path = require("path");
// const fs = require("fs");
// const heros = require("./hero.json");
// const app = express();
// const mysql = require("mysql2");
// const exphbs = require("express-handlebars");
// const hbs = exphbs.create({});

// app.use(express.static("public"));
// // app.use(express.json());
// app.engine("handlebars", hbs.engine);
// app.set("view engine", "handlebars");
// // app.use(require("./hero.json"));
// app.use(require("./controllers/heros"));
// // const db = mysql.createConnection(
// //   {
// //     host: "localhost",
// //     user: "root",
// //     password: "",
// //     database: "inventory_db"
// //   },
// //   console.log(`Connected to the inventory_db database.`)
// // );

// // db.query("show databases", function(err, results) {
// //   console.log(results);
// // });

// // db.query("SELECT * FROM books", function(err, results) {
// //   console.log(results);
// // });

// app.listen(3001);

// Dependencies
const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const hbs = exphbs.create({});

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

// Set Handlebars as the default template engine.
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", "views");

app.use(express.static(path.join(__dirname, "public")));
app.use(require("./controllers/heros"));

// Starts the server to begin listening
app.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:3001`);
});
