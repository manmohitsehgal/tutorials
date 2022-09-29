let heroId = 1;

export const addHero = name => ({
  type: "ADD_HERO",
  id: heroId++,
  name
});
