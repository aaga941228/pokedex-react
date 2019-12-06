import getOneType from "../utils/GetOneType";

const getListOfPokemonsByType = async typeName => {
  const listOfPokemonsFetch = await getOneType(typeName);
  const listOfPokemons = listOfPokemonsFetch.map(pokemon => {
    const { name } = pokemon.pokemon;
    const { url } = pokemon.pokemon;
    const id = url.substring(34, 37).replace(/\//, "");
    return {
      name,
      url,
      id
    };
  });
  return listOfPokemons;
};

export default getListOfPokemonsByType;
