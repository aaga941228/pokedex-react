import axios from "axios";

export const getAllPokemons = async (offset, limit) => {
  try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon-species/?offset=${offset}&limit=${limit}`
    );
    return response.data.results.map(res => {
      return {
        name: res.name,
        url: res.url,
        id: res.url.substring(42, 45).replace(/\//, "")
      };
    });
  } catch (e) {
    console.log(e);
  }
}

export const getOnePokemon = async idx => {
  try {
    const pokemonFetch1 = await axios.get(
      `https://pokeapi.co/api/v2/pokemon-species/${idx}`
    );
    const pokemonFetch2 = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${idx}`
    );
    const {
      id,
      name,
      evolution_chain,
      evolves_from_species,
      habitat,
      names
    } = pokemonFetch1.data;
    const {
      abilities,
      base_experience,
      height,
      sprites,
      stats,
      types,
      weight
    } = pokemonFetch2.data;
    return {
      id,
      name,
      evolution_chain,
      evolves_from_species,
      habitat,
      names,
      abilities,
      base_experience,
      height,
      sprites,
      stats,
      types,
      weight
    };
  } catch (e) {
    console.log(e);
  }
}

export const getAllTypes = async () => {
  try {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/type/?limit=18"
    );
    const { results } = response.data;
    return results;
  } catch (e) {
    console.log(e);
  }
}

export const getOneType = async typeName => {
  try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/type/${typeName}`
    );
    return response.data.pokemon;
  } catch (e) {
    console.log(e);
  }
}

export const getEvolutionChain = async url => {
  try {
    const evolutions = await axios.get(url);
    const firstEvolution = evolutions.data.chain.species;
    const name1 = firstEvolution.name;
    const url1 = firstEvolution.url;
    const id1 = url1.substring(42, 45).replace(/\//, "");
    if (evolutions.data.chain.evolves_to[0] === undefined) {
      return [{ name: name1, url: url1, id: id1 }];
    }
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
  } catch (e) {
    console.log(e);
  }
}