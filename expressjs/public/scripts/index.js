//const jwt = require("jsonwebtoken");

const form = document.getElementById("hero-form");

form.addEventListener("submit", e => {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const heroClass = document.getElementById("heroClass").value;

  const heroObjectToAdd = {
    username,
    heroClass
  };
  addHero(heroObjectToAdd);

  // const data = signToken();
  // console.log(data);
});

//get the post call and add that

// const signToken = function() {
//   const payload = { email: "2uabc@mailinator.com", username: "2U", id: "1" };
//   return jwt.sign({ data: payload }, secret, { expiresIn: "1h" });
// };

addHero = hero => {
  // fetch the post call that will save it to the json
  fetch("http://localhost:3001/api/addHero", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(hero)
  })
    .then(res => res.json())
    .then(data => {
      return data;
    })
    .catch(err => console.log("err => ", err));
};
