getPokemonGivenId = id => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
  fetch(url)
    .then(val => val.json())
    .then(actual => {
      console.log(actual);
      const img = document.createElement("img");
      img.src = actual.sprites.other.dream_world.front_default;
      const src = document.getElementById("pokemonImage");
      src.appendChild(img);
      const stat = actual.stats;
      const statName = document.getElementById("pokeStatName");
      for (let i = 0; i < stat.length; i++) {
        statName.innerHTML +=
          "<div id=" +
          i +
          " style='text-align: center'>" +
          stat[i].stat.name.toUpperCase() +
          " " +
          stat[i].base_stat +
          "</div>";
      }
    });
};

getPokemonGivenId(1);
