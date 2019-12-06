import React from "react";
import { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard";
import PokemonsFilterd from "./PokemonsFilterd";
import FilterByType from "./FilterByType";
import getAllPokemons from "../utils/GetAllPokemons";
import getAllTypes from "../utils/GetAllTypes";
import filterByType from "../utils/FilterByType";

const PokedexHome = () => {
  const [pokemons, setPokemons] = useState([]);
  const [types, setTypes] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);

  useEffect(() => {
    (async () => {
      const pokemonsFetch = await getAllPokemons();
      setPokemons(pokemonsFetch.data.results);
      const typesFetch = await getAllTypes();
      setTypes(typesFetch);
    })();
  }, []);

  const handleClickFilter = async e => {
    const listOfPokemonsByType = await filterByType(e.target.dataset.name);
    setFilteredPokemons(listOfPokemonsByType);
  };

  const pokemonsList = pokemons.map((pokemon, index) => (
    <PokemonCard key={index} pokemon={pokemon} id={index + 1} />
  ));

  console.log(filteredPokemons);
  return (
    <div className="container mx-auto p-3">
      <FilterByType
        filter={handleClickFilter}
        types={types}
        className="row mb-3 p-3"
      />
      {filteredPokemons.length === 0 ? (
        <div className="row mb-3 p-3">{pokemonsList}</div>
      ) : (
        <PokemonsFilterd pokemons={filteredPokemons} />
      )}
    </div>
  );
};

export default PokedexHome;
