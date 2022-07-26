const router = require("express").Router();
const Hero = require("../../models/Hero");

// GET all Heros
router.get("/", (req, res) => {
  // Get all Heros from the Hero table
  Hero.findAll().then(HeroData => {
    res.json(HeroData);
  });
});

// GET a single Hero
router.get("/:id", (req, res) => {
  // Find a single Hero by its primary key (Hero_id)
  Hero.findByPk(req.params.id).then(HeroData => {
    res.json(HeroData);
  });
});

// CREATE a Hero
router.post("/", (req, res) => {
  Hero.create(req.body)
    .then(newHero => {
      res.json(newHero);
    })
    .catch(err => {
      res.json(err);
    });
});

// CREATE multiple Heros
router.post("/seed", (req, res) => {
  Hero.bulkCreate([
    {
      heroName: "Goku",
      heroClass: "Super Saiyan",
      is_alive: true
    },
    {
      heroName: "Vegeta",
      heroClass: "Super Saiyan",
      is_alive: true
    },
    {
      heroName: "Trunks",
      heroClass: "Super Saiyan",
      is_alive: true
    },
    {
      heroName: "Gotenks",
      heroClass: "Super Saiyan",
      is_alive: true
    },
    {
      heroName: "Goku-UI",
      heroClass: "Ultra Instinct",
      is_alive: true
    },
    {
      heroName: "Naruto Uzumaki",
      heroClass: "Jonin",
      is_alive: true
    },
    {
      heroName: "Kakashi Hatake",
      heroClass: "Hokage",
      is_alive: true
    },
    {
      heroName: "Ogata Shuma Hiroyuki (Jiraya)",
      heroClass: "Legendary Sannin",
      is_alive: false
    }
  ])
    .then(() => {
      return heros.post.findAll();
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;
