import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PokemonView from "./PokemonView";
import emptyPokemon from "../utils/EmptyPokemon";
import getOnePokemoByUrl from "../utils/GetOnePokemonByUrl";
import getEvolutionChain from "../utils/GetEvolutionChain";

const PokemonDetails = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(emptyPokemon());
  const [evolutionChain, setEvolutionChain] = useState([]);

  useEffect(() => {
    (async () => {
      const URI = `https://pokeapi.co/api/v2/pokemon-species/${id}`;
      const pokemonInfo = await getOnePokemoByUrl(URI);
      setPokemon(pokemonInfo);
      const evolutions = await getEvolutionChain(id);
      setEvolutionChain(evolutions);
    })();
  }, [id]);

  return (
    <div className="container my-5 mx-auto">
      <div className="card col-md-8 my-5 mx-auto bg-dark text-primary">
        <PokemonView pokemon={pokemon} evolutionChain={evolutionChain} />
      </div>
    </div>
  );
};

export default PokemonDetails;
