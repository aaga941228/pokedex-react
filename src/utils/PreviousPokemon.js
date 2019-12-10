const previousPokemon = (pokemons, id) => {
  const poke = pokemons.find(pokemon => pokemon.id === id);
  const pokeIndex = pokemons.indexOf(poke);
  const previousIndex = pokeIndex - 1;
  if (
    pokemons[previousIndex] === undefined ||
    pokemons[previousIndex].display === "none"
  ) {
    return id;
  }
  return pokemons[previousIndex].id;
};

export default previousPokemon;
