import React, { useState, useEffect, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import PokemonView from "./PokemonView";
import { getOnePokemon, getEvolutionChain } from "../pokemonService";
import emptyPokemon from "../utils/emptyPokemon";
import getPreviousPokemon from "../utils/previousPokemon";
import getNextPokemon from "../utils/nextPokemon";

const PokemonDetails = ({ pokemons = [] }) => {
  const [pokemon, setPokemon] = useState(emptyPokemon());
  const [evolutionChain, setEvolutionChain] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    (async () => await getPokemonInfo)();
  }, []);

  const getPokemonInfo = useMemo(async () => {
    const pokemonInfo = await getOnePokemon(id);
    setPokemon(pokemonInfo);
    const evolutioChainUrl = pokemonInfo.evolution_chain.url;
    const evolutions = await getEvolutionChain(evolutioChainUrl);
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
    <div className="container py-3">
      <div className="row mx-1 p-5">
        <div className="col">
          {!!previousPokemon && (
            <Link className="carousel-control-prev" to={`${previousPokemon}`}>
              <span>Previous pokemon</span>
            </Link>
          )}
        </div>
        <div className="col">
          {!!nextPokemon && (
            <Link className="carousel-control-next" to={`${nextPokemon}`}>
              <span>Next pokemon</span>
            </Link>
          )}
        </div>
      </div>
      {!!pokemon && (
        <PokemonView pokemon={pokemon} evolutionChain={evolutionChain} />
      )}
    </div>
  );
};

export default PokemonDetails;
