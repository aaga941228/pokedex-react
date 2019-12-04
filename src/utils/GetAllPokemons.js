import axios from "axios";

const getAllPokemons = async () => {
  const response = await axios.get(
    "https://pokeapi.co/api/v2/pokemon-species/?limit=807"
  );
  return response;
};

export default getAllPokemons;
