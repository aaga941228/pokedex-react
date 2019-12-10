import React from "react";
import PokemonCard from "./PokemonCard";
import FilterByType from "./FilterByType";
import FilterByName from "./FilterByName";

const PokedexHome = props => {
  const pokemonsList = props.pokemons.map((pokemon, index) => (
    <PokemonCard key={index} pokemon={pokemon} />
  ));

  return (
    <div className="container mx-auto p-3">
      <FilterByName handleChangeInputName={props.handleChangeInputName} />
      <FilterByType
        types={props.types}
        filter={props.handleClickFilter}
        className="row mb-3 p-3"
      />
      <div className="row mb-3 p-3">{pokemonsList}</div>
    </div>
  );
};

export default PokedexHome;
