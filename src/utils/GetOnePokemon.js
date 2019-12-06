import axios from "axios";

const getOnePokemon = async idx => {
  const pokemon = await axios.get(
    `https://pokeapi.co/api/v2/pokemon-species/${idx}`
  );
  const {
    id,
    name,
    types,
    evolution_chain,
    evolves_from_species,
    habitat,
    names
  } = pokemon.data;
  return {
    id,
    name,
    types,
    evolution_chain,
    evolves_from_species,
    habitat,
    names
  };
};

export default getOnePokemon;
