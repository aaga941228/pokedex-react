import axios from "axios";

const fetchService = {
  getAllPokemons: async () => {
    try {
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
    } catch (e) {
      console.log(e);
    }
  },

  getOnePokemon: async idx => {
    try {
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
        names,
        display: "flex"
      };
    } catch (e) {
      console.log(e);
    }
  },

  getAllTypes: async () => {
    try {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/type/?limit=20"
      );
      return response.data.results;
    } catch (e) {
      console.log(e);
    }
  },

  getOneType: async typeName => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/type/${typeName}`
      );
      return response.data.pokemon;
    } catch (e) {
      console.log(e);
    }
  },

  getOnePokemonByUrl: async url => {
    try {
      const pokemon = await axios.get(url);
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
        names,
        display: "flex"
      };
    } catch (e) {
      console.log(e);
    }
  },

  getEvolutionChain: async url => {
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
};

export default fetchService;
