import axios from "axios";

const getOnePokemonByUrl = async url => {
  const pokemon = await axios.get(url);
  const {
    name,
    id,
    types,
    evolution_chain,
    evolves_from_species,
    habitat,
    names
  } = pokemon.data;
  return {
    name,
    id,
    types,
    evolution_chain,
    evolves_from_species,
    habitat,
    names
  };
};

export default getOnePokemonByUrl;
