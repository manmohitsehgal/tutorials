const router = require("express").Router();

const heroData = [
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
    ]
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
      {
        id: 1,
        name: " Big Bang Kamehameha"
      },
      {
        id: 2,
        name: " Spirit Bomb"
      },
      {
        id: 3,
        name: " Blue Form"
      }
    ]
  }
];

router.get("/", async (req, res) => {
  res.render("heros", { heroData });
});

router.get("/api/getHero/:id", async (req, res) => {
  return res.render("eachHero", heroData[req.params.id - 1]);
  //res.render(<handlebar_filename>, data);
});

router.post("/heroLogin", async (req, res) => {
  console.log(req.sessionID);
  const { username, password } = req.body;
  if (username === "naruto" && password === "hinata") {
    req.session.authenticated = true;
    req.session.data = { username, password };
    res.json(req.session);
  } else {
    req.session.authenticated = false;
    res.status(403).json({ message: "Get out, not authorized" });
  }
});

router.post("/logout", async (req, res) => {
  req.session.authenticated = false;
  req.session.destroy(() => {
    res.status(204);
  });
});

module.exports = router;
