import React from "react";
import PokemonImage from "./PokemonImage";
import PokemonChainEvolution from "./PokemonChainEolution";

const PokemonView = props => {
  return (
    <div className="col-10 col-md-8 col-lg-6 col-xl-4w my-5 p-1 mx-auto bg-dark text-primary rounded">
      <div className="card mt-3 p-5 bg-transparent">
        <div className="card-title d-flex justify-content-between">
          <p className="d-inline-block">{`${props.pokemon.name} (${props.pokemon.names[1].name})`}</p>
          <p className="d-inline-block">#{props.pokemon.id}</p>
        </div>
        <PokemonImage id={props.pokemon.id} />
      </div>
      <PokemonChainEvolution {...props} />
    </div>
  );
};

export default PokemonView;
