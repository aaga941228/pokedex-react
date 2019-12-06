import axios from "axios";

const getAllPokemons = async () => {
  const response = await axios.get(
    "https://pokeapi.co/api/v2/pokemon-species/?limit=804"
  );
  const list = response.data.results.map(res => {
    return {
      name: res.name,
      url: res.url,
      id: res.url.substring(42, 45).replace(/\//, "")
    };
  });
  return list;
};

export default getAllPokemons;
