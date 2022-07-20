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
});

//get the post call and add that

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
