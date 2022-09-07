const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const hbs = exphbs.create({});
const app = express();
const sess = {
  secret: "Secret",
  resave: false,
  saveUninitialized: true
};
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.use(express.urlencoded({ extended: true }));
app.use(session(sess));
app.use(require("./controllers/hero-routes"));
app.listen(3001);
