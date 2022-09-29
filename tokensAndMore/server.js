const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");

app.use(express.json());

authenticate = function(req, res, next) {
  console.log(req.headers);
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    return res.sendStatus(401);
  }
  jwt.verify(token, "secret$$eeok", (err, data) => {
    if (err) {
      res.sendStatus(403);
    }
    console.log(data);
    next();
  });
};

app.get("/all", authenticate, (req, res) => {
  res.json([{ email: "abc@email.com", username: "2u", id: "1" }]);
});

signToken = function(email, username, id) {
  const payload = {
    email: email,
    username: username,
    id: id
  };
  return jwt.sign({ data: payload }, "secret$$eeok", { expiresIn: "1h" });
};

app.post("/create", (req, res) => {
  const tokenData = signToken("abc@email.com", "2u", 1);
  return res.json({ accessToken: tokenData });
});

app.listen(3000);
