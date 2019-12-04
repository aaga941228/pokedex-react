import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PokemonView from "./PokemonView";
import emptyPokemon from "../utils/EmptyPokemon";
import getOnePokemon from "../utils/GetOnePokemon";

const PokemonDetails = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(emptyPokemon());

  useEffect(() => {
    (async () => {
      const pokemon = await getOnePokemon(id);
      const {
        name,
        evolution_chain,
        evolves_from_species,
        habitat,
        names
      } = pokemon.data;
      const data = {
        id,
        name,
        evolution_chain,
        evolves_from_species,
        habitat,
        names
      };
      console.log(data);
      setPokemon(data);
    })();
  }, [id]);

  return (
    <div className="container p-5">
      <div className="row d-flex justify-content-center">
        <PokemonView pokemon={pokemon} />
      </div>
    </div>
  );
};

export default PokemonDetails;
