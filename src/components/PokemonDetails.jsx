import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PokemonView from "./PokemonView";
import emptyPokemon from "../utils/EmptyPokemon";
import previousPokemon from "../utils/PreviousPokemon";
import nextPokemon from "../utils/NextPokemon";
import fetchService from "../FetchService";
import { Link } from "react-router-dom";

const PokemonDetails = props => {
  const [pokemon, setPokemon] = useState(emptyPokemon());
  const [evolutionChain, setEvolutionChain] = useState([]);
  const { id } = useParams();
  const { pokemons } = props;

  useEffect(() => {
    (async () => {
      const pokemonInfo = await fetchService.getOnePokemon(id);
      setPokemon(pokemonInfo);
      const evolutioChainUrl = pokemonInfo.evolution_chain.url;
      const evolutions = await fetchService.getEvolutionChain(evolutioChainUrl);
      setEvolutionChain(evolutions);
    })();
  }, [id]);

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-6">
          <Link
            className="carousel-control-prev"
            to={`${previousPokemon(pokemons, id)}`}
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </Link>
        </div>
        <div className="col-6">
          <Link
            className="carousel-control-next"
            to={`${nextPokemon(pokemons, id)}`}
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </Link>
        </div>
      </div>
      <PokemonView pokemon={pokemon} evolutionChain={evolutionChain} />
    </div>
  );
};

export default PokemonDetails;
