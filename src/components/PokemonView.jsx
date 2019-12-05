import React from "react";
import PokemonImage from "./PokemonImage";
import PokemonDescription from "./PokemonDescription";

const PokemonView = props => {
  return (
    <div className="card-body">
      <div className="card-title d-flex justify-content-between align-items-center">
        <h5>{`${props.pokemon.name}(${props.pokemon.names[1].name})`}</h5>
        <h5>#{props.pokemon.id}</h5>
      </div>
      <PokemonImage id={props.pokemon.id} />
      <PokemonDescription {...props} />
    </div>
  );
};

export default PokemonView;
