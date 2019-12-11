const previousPokemon = (pokemons, id) => {
  const pokemonsList = pokemons.filter(pokemon => pokemon.display !== "none");
  const pokemonIndex = pokemonsList.findIndex(pokemon => pokemon.id === id);
  const previousIndex = pokemonIndex - 1;
  if (pokemons[previousIndex] === undefined) {
    return id;
  } else {
    return pokemons[previousIndex].id;
  }
};

export default previousPokemon;
