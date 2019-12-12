import React from "react";
import PokemonImageMini from "./PokemonImageMini";

const PokemonChainEvolution = props => {
  let PokemonChainImages = props.evolutionChain[0] && (
    <div className="row d-flex justify-content-around">
      <PokemonImageMini id={props.evolutionChain[0].id} />
      {props.evolutionChain[1] && (
        <PokemonImageMini id={props.evolutionChain[1].id} />
      )}
      {props.evolutionChain[2] && (
        <PokemonImageMini id={props.evolutionChain[2].id} />
      )}
    </div>
  );
  return (
    <div className="card p-3 bg-transparent">
      <div className="card-title p-3 d-flex justify-content-center">
        <p className="d-inline-block fs-1-75">Chain evolution</p>
      </div>
      {PokemonChainImages}
    </div>
  );
};

export default PokemonChainEvolution;
