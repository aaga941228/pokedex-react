import React from "react";
import { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard";
import getAllPokemons from "../utils/GetAllPokemons";

const PokedexHome = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await getAllPokemons();
      const { results } = response.data;
      setPokemons(results);
    })();
  }, []);

  const pokemonsList = pokemons.map((pokemon, index) => (
    <PokemonCard key={index} pokemon={pokemon} id={index + 1} />
  ));

  return (
    <div className="container mx-auto p-3">
      <div className="row mb-3 p-3">{pokemonsList}</div>
    </div>
  );
};

export default PokedexHome;
