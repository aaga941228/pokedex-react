const filterByName = (value, pokemons) => {
  const pattern = new RegExp(value, "g", "i");
  pokemons.forEach(pokemon => {
    if (!pattern.test(pokemon.name)) {
      const pokemonCard = document.getElementById(`pokemon-${pokemon.id}`);
      pokemon.display = "none";
      pokemonCard.classList.add("d-none");
    }
    if (value === "") {
      const pokemonCard = document.getElementById(`pokemon-${pokemon.id}`);
      pokemonCard.classList.add("d-flex");
      pokemon.display = "flex";
    }
  });
};

export default filterByName;
