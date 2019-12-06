import axios from "axios";

const GetAllTypes = async () => {
  const response = await axios.get("https://pokeapi.co/api/v2/type/?limit=20");
  return response.data.results;
};

export default GetAllTypes;
