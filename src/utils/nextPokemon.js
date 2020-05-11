const nextPokemon = (pokemons, id) => {
  const pokemonIndex = pokemons.findIndex(pokemon => pokemon.id === id);
  return pokemonIndex < pokemons.length - 1
    ? pokemons[pokemonIndex + 1].id
    : undefined;
};

export default nextPokemon;
