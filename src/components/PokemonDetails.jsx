import React, { useState, useEffect, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import PokemonView from "./PokemonView";
import fetchService from "../fetchService";
import emptyPokemon from "../utils/emptyPokemon";
import getPreviousPokemon from "../utils/previousPokemon";
import getNextPokemon from "../utils/nextPokemon";

const PokemonDetails = props => {
  const [pokemon, setPokemon] = useState(emptyPokemon());
  const [evolutionChain, setEvolutionChain] = useState([]);
  const { id } = useParams();
  const { pokemons = [] } = props;

  useEffect(() => {
    (async () => await getPokemonInfo)();
  }, []);

  const getPokemonInfo = useMemo(async () => {
    const pokemonInfo = await fetchService.getOnePokemon(id);
    setPokemon(pokemonInfo);
    const evolutioChainUrl = pokemonInfo.evolution_chain.url;
    const evolutions = await fetchService.getEvolutionChain(evolutioChainUrl);
    setEvolutionChain(evolutions);
  }, [id]);

  const previousPokemon = useMemo(() => getPreviousPokemon(pokemons, id), [
    pokemons,
    id
  ]);

  const nextPokemon = useMemo(() => getNextPokemon(pokemons, id), [
    pokemons,
    id
  ]);

  return (
    <div className="row px-5 pt-5 px-5">
      <div className="col-6">
        {!!previousPokemon && (
          <Link className="carousel-control-prev" to={`${previousPokemon}`}>
            <span>Previous pokemon</span>
          </Link>
        )}
      </div>
      <div className="col-6">
        {!!nextPokemon && (
          <Link className="carousel-control-next" to={`${nextPokemon}`}>
            <span>Next pokemon</span>
          </Link>
        )}
      </div>
      {!!pokemon && (
        <PokemonView pokemon={pokemon} evolutionChain={evolutionChain} />
      )}
    </div>
  );
};

export default PokemonDetails;
