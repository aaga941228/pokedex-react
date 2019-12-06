import axios from "axios";

const getEvolutionChain = async url => {
  const evolutions = await axios.get(url);
  const firstEvolution = evolutions.data.chain.species;
  const name1 = firstEvolution.name;
  const url1 = firstEvolution.url;
  const id1 = url1.substring(42, 45).replace(/\//, "");

  const secondEvolution = evolutions.data.chain.evolves_to[0].species;
  const name2 = secondEvolution.name;
  const url2 = secondEvolution.url;
  const id2 = url2.substring(42, 45).replace(/\//, "");

  if (evolutions.data.chain.evolves_to[0].evolves_to[0] === undefined) {
    return [
      { name: name1, url: url1, id: id1 },
      { name: name2, url: url2, id: id2 }
    ];
  }

  const thirdEvolution =
    evolutions.data.chain.evolves_to[0].evolves_to[0].species;
  const name3 = thirdEvolution.name;
  const url3 = thirdEvolution.url;
  const id3 = url3.substring(42, 45).replace(/\//, "");

  return [
    { name: name1, url: url1, id: id1 },
    { name: name2, url: url2, id: id2 },
    { name: name3, url: url3, id: id3 }
  ];
};

export default getEvolutionChain;
