import axios from "axios";

const GetOneType = async typeName => {
  const response = await axios.get(
    `https://pokeapi.co/api/v2/type/${typeName}`
  );
  return response.data.pokemon;
};

export default GetOneType;
