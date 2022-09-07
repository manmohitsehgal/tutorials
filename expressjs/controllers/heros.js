const router = require("express").Router();

const heros = [
  {
    id: "goku",
    name: "Goku",
    race: "Saiyan",
    gender: "Male",
    bio:
      "Goku, born Kakarot, is a male Saiyan and the main protagonist of the Dragon Ball series. Goku is a Saiyan originally sent to Earth as an infant with the mission to destroy its people. However, an accident alters his memory, allowing him to grow up to become Earth's greatest defender and the informal leader of the Dragon Team. He constantly strives and trains to be the greatest warrior possible, which has kept the Earth and the universe safe from destruction many times.",
    health: "500,000",
    attack: "50,000",
    defense: "50,000",
    kiRestoreSpeed: "50,000",
    abilities: [
      "Super Saiyan Transformations",
      "Super Kamehameha",
      "Super Dragon Fist"
    ],
    img: "assets/goku.png"
  },
  {
    id: "vegeta",
    name: "Vegeta",
    race: "Saiyan",
    gender: "Male",
    bio:
      "Vegeta is the Prince of an extraterrestrial race of warriors known as the Saiyans just like the series' protagonist, Goku. Vegeta is extremely vain and proud, constantly referring to his heritage throughout the series. He believes he should be regarded as the strongest fighter in the Universe and becomes obsessed with surpassing Goku after fighting him. After his loss to Goku and the Z fighters, Vegeta later reluctantly unites with the heroes to thwart greater threats to the universe. Throughout the series, Vegeta's role changes from villain to antihero and later as one of the heroes, while remaining a rival to Goku. Vegeta's character, particularly his personality, has been well received. He is one of the Dragon Ball franchise's most popular characters.",
    health: "490,000",
    attack: "49,000",
    defense: "49,000",
    kiRestoreSpeed: "49,000",
    abilities: [
      "Super Saiyan Transformations",
      "Final Flash",
      "Big Bang Attack"
    ],
    img: "assets/vegeta.png"
  }
];

router.get("/", async (req, res) => res.render("heros", { heros }));

router.get("/api/getHero/:id", async (req, res) => {
  return res.render("heros", heros[req.param.id - 1]);
});

// app.get("/", (req, res) => res.sendFile(path.join(__dirname, "/index.html")));

// app.get("/api/getHero/:id", (req, res) => {
//   // goes the logic to get the id
//   if (req.body && req.params.id) {
//     console.log(typeof req.params.id);
//     for (let i = 0; i < heros.length; i++) {
//       if (heros[i].id === parseInt(req.params.id)) {
//         res.json(heros[i]);
//         return;
//       }
//     }
//     res.json("no hero id found");
//   }
// });

// router.get("/api/getHero/:id", (req, res) => {
//   return res.render("heros", heros[req.param.id - 1]);
// });

// router.post("/api/addHero", (req, res) => {
//   const { username, heroClass } = req.body;
//   console.log(username, heroClass);

//   const heroObjectInPlay = {
//     id: generateRandom(9000),
//     username,
//     heroClass
//   };

//   fs.readFile("./hero.json", "utf-8", (err, data) => {
//     let heros = JSON.parse(data);
//     heros = [...heros, heroObjectInPlay];
//     console.log(heros);
//     fs.writeFile("./hero.json", JSON.stringify(heros), err => {
//       // if(err){
//       //   console.log("Err")
//       // }
//       // else{
//       //   console.log("Updated hero files")
//       // }

//       // condition ? truthy : falsy
//       err ? console.log("err") : console.log("Updated Heros File");
//     });
//   });

//   const response = {
//     status: "success",
//     body: heroObjectInPlay
//   };

//   res.json(response);
// });

// generateRandom = max => {
//   return Math.floor(Math.random() * max);
// };

module.exports = router;
