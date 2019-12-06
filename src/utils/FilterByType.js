import getOneType from "../utils/GetOneType";

const getListOfPokemonsByType = async typeName => {
  const listOfPokemonsFetch = await getOneType(typeName);
  const listOfPokemons = listOfPokemonsFetch.map(
    pokemon => pokemon.pokemon.url
  );
  return listOfPokemons;
};

export default getListOfPokemonsByType;
