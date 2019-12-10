import React from "react";
import PokemonImage from "./PokemonImage";
import PokemonDescription from "./PokemonDescription";

const PokemonView = props => {
  return (
    <div className="container col-10 col-sm-8 col-md-6 my-5 p-1 mx-auto bg-dark text-primary">
      <div className="card mt-3 py-3 bg-transparent">
        <div className="card-title px-5 d-flex justify-content-between align-items-center">
          <h5>{`${props.pokemon.name} (${props.pokemon.names[1].name})`}</h5>
          <h5>#{props.pokemon.id}</h5>
        </div>
        <PokemonImage id={props.pokemon.id} />
      </div>
      <PokemonDescription {...props} />
    </div>
  );
};

export default PokemonView;
