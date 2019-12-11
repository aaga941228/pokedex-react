const nextPokemon = (pokemons, id) => {
  const pokemonsList = pokemons.filter(pokemon => pokemon.display !== "none");
  const pokemonIndex = pokemonsList.findIndex(pokemon => pokemon.id === id);
  const nextIndex = pokemonIndex + 1;
  if (pokemons[nextIndex] === undefined) {
    return id;
  }
  return pokemons[nextIndex].id;
};

export default nextPokemon;
