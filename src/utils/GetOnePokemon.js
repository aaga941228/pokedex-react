import axios from "axios";

const getOnePokemon = async id => {
  const pokemon = await axios.get(
    `https://pokeapi.co/api/v2/pokemon-species/${id}`
  );
  const {
    name,
    evolution_chain,
    evolves_from_species,
    habitat,
    names
  } = pokemon.data;
  const pokemonInfo = {
    id,
    name,
    evolution_chain,
    evolves_from_species,
    habitat,
    names
  };
  return pokemonInfo;
};

export default getOnePokemon;
