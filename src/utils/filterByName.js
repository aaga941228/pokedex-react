const filterByName = (value, pokemons) => {
  const listOfPokemons = [];
  const pattern = new RegExp(value, "g", "i");

  if (!value) {
    return pokemons;
  }

  pokemons.forEach(pokemon => {
    if (pattern.test(pokemon.name)) {
      listOfPokemons.push(pokemon);
    }
  });

  return listOfPokemons;
};

export default filterByName;
