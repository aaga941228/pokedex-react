const nextPokemon = (pokemons, id) => {
  const poke = pokemons.find(pokemon => pokemon.id === id);
  const pokeIndex = pokemons.indexOf(poke);
  const nextIndex = pokeIndex + 1;
  if (
    pokemons[nextIndex] === undefined ||
    pokemons[nextIndex].display === "none"
  ) {
    return id;
  }
  return pokemons[nextIndex].id;
};

export default nextPokemon;
