const getPreviousPokemon = (pokemons, id) => {
  const pokemonIndex = pokemons.findIndex(pokemon => pokemon.id === id);
  return pokemonIndex > 0 ? pokemons[pokemonIndex - 1].id : undefined;
};

export default getPreviousPokemon;
