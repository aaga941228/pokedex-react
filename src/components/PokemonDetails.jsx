import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PokemonView from "./PokemonView";
import emptyPokemon from "../utils/EmptyPokemon";
import getOnePokemon from "../utils/GetOnePokemon";
import getEvolutionChain from "../utils/GetEvolutionChain";

const PokemonDetails = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(emptyPokemon());
  const [evolutionChain, setEvolutionChain] = useState([]);

  useEffect(() => {
    (async () => {
      const pokemonInfo = await getOnePokemon(id);
      setPokemon(pokemonInfo);
      const evolutioChainUrl = pokemonInfo.evolution_chain.url;
      const evolutions = await getEvolutionChain(evolutioChainUrl);
      setEvolutionChain(evolutions);
    })();
  }, [id]);

  return <PokemonView pokemon={pokemon} evolutionChain={evolutionChain} />;
};

export default PokemonDetails;
