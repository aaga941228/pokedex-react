import React from "react";
import { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard";
import FilterByType from "./FilterByType";
import FilterByName from "./FilterByName";
import fetchService from "../FetchService";
import filterByType from "../utils/FilterByType";
import filterByName from "../utils/FilterByName";

const PokedexHome = () => {
  const [pokemons, setPokemons] = useState([]);
  const [types, setTypes] = useState([]);

  useEffect(() => {
    (async () => {
      const pokemonsFetch = await fetchService.getAllPokemons();
      setPokemons(pokemonsFetch);
      const typesFetch = await fetchService.getAllTypes();
      setTypes(typesFetch);
    })();
  }, []);

  const handleClickFilter = async e => {
    const listOfPokemonsByType = await filterByType(e.target.dataset.name);
    setPokemons(listOfPokemonsByType);
  };

  const handleChangeInputName = e => {
    filterByName(e.target.value, pokemons);
  };

  const pokemonsList = pokemons.map((pokemon, index) => (
    <PokemonCard key={index} pokemon={pokemon} />
  ));

  return (
    <div className="container mx-auto p-3">
      <FilterByName handleChangeInputName={handleChangeInputName} />
      <FilterByType
        filter={handleClickFilter}
        types={types}
        className="row mb-3 p-3"
      />
      <div className="row mb-3 p-3">{pokemonsList}</div>
    </div>
  );
};

export default PokedexHome;
