import React from "react";
import PokemonCard from "./PokemonCard";
import FilterByType from "./FilterByType";
import FilterByName from "./FilterByName";

const PokedexHome = props => (
  <div className="container mx-auto p-3">
    <div className="row">
      <div className="col-12">
      <FilterByName handleChangeInputName={props.handleChangeInputName} />
      </div>
      <div className="col-12">
        <FilterByType
          types={props.types}
          filter={props.handleClickFilter}
          className="mb-3 p-3"
        />
      </div>
    </div>
    <div className="row p-2">
      {props.pokemons.map(pokemon => (
        <PokemonCard key={pokemon.id} pokemon={pokemon}/>
      ))}
    </div>
  </div>
);

export default PokedexHome;
