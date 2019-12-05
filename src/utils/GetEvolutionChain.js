import axios from "axios";

const getEvolutionChain = async id => {
  const evolutions = await axios.get(
    `https://pokeapi.co/api/v2/evolution-chain/${id}`
  );
  const firstEvolution = evolutions.data.chain.species;
  const secondEvolution = evolutions.data.chain.evolves_to[0].species;
  const thirdEvolution =
    evolutions.data.chain.evolves_to[0].evolves_to[0].species;
  const evolutionChain = [firstEvolution, secondEvolution, thirdEvolution];
  return evolutionChain;
};

export default getEvolutionChain;
