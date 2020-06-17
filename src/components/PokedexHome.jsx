import React, { useEffect } from "react";
import FilterByType from "./FilterByType";
import GoTopButton from './GoTopButton';
import PokemonCard from "./PokemonCard";

const PokedexHome = ({ types, handleClickFilter, pokemons }) => (
  <div className="container-fluid">
    <div className="container mx-auto p-3">
      <div className="row">
        <div className="col">
          <FilterByType
            types={types}
            filter={handleClickFilter}
            className="mb-3 p-3"
          />
        </div>
      </div>
      <div className="row">
        {pokemons.map((pokemon, index) => (
          <PokemonCard key={index} pokemon={pokemon} />
        ))}
      </div>
    </div>
    <GoTopButton />
  </div>
);

export default PokedexHome;
