import axios from "axios";

const getOnePokemon = async id => {
  const response = await axios.get(
    `https://pokeapi.co/api/v2/pokemon-species/${id}`
  );
  return response;
};

export default getOnePokemon;
