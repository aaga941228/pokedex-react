import fetchService from "../fetchService";

const filterByType = async typeName => {
  const listOfPokemonsFetch = await fetchService.getOneType(typeName);

  const listOfPokemons = listOfPokemonsFetch.map(pokemon => {
    const { name, url } = pokemon.pokemon;
    const id = url.substring(34, 37).replace(/\//, "");

    return {
      name,
      url,
      id
    };
  });

  return listOfPokemons;
};

export default filterByType;
