import React from "react";
import PokemonCard from "./PokemonCard";
import FilterByType from "./FilterByType";
import FilterByName from "./FilterByName";

const PokedexHome = ({ handleChangeInputName, types, handleClickFilter, pokemons, handleClickMorePokemons }) => (
  <div className="container mx-auto p-3">
    <div className="row">
      <div className="col-12">
      <FilterByName handleChangeInputName={handleChangeInputName} />
      </div>
      <div className="col-12">
        <FilterByType
          types={types}
          filter={handleClickFilter}
          className="mb-3 p-3"
        />
      </div>
    </div>
    <div className="row p-2">
      {pokemons.map(pokemon => (
        <PokemonCard key={pokemon.id} pokemon={pokemon}/>
      ))}
    </div>
    <button type="button" className="btn btn-secondary btn-lg btn-block" onClick={handleClickMorePokemons}>More pokemons</button>
  </div>
);

export default PokedexHome;
