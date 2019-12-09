import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PokemonView from "./PokemonView";
import emptyPokemon from "../utils/EmptyPokemon";
import fetchService from "../FetchService";

const PokemonDetails = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(emptyPokemon());
  const [evolutionChain, setEvolutionChain] = useState([]);

  useEffect(() => {
    (async () => {
      const pokemonInfo = await fetchService.getOnePokemon(id);
      setPokemon(pokemonInfo);
      const evolutioChainUrl = pokemonInfo.evolution_chain.url;
      const evolutions = await fetchService.getEvolutionChain(evolutioChainUrl);
      setEvolutionChain(evolutions);
    })();
  }, [id]);

  return <PokemonView pokemon={pokemon} evolutionChain={evolutionChain} />;
};

export default PokemonDetails;
