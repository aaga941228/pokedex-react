import React from "react";
import PokemonChainEvolutionLink from "./PokemonChainEvolutionLink";

const PokemonChainEvolution = props => {
  return (
    <div className="card p-3 bg-transparent">
      <div className="card-title p-3 d-flex justify-content-center">
        <p className="d-inline-block uppercase">Chain evolution</p>
      </div>
      {props.evolutionChain[0] && (
        <div className="row d-flex justify-content-around">
          <PokemonChainEvolutionLink evolutionChain={props.evolutionChain[0]} />
          {props.evolutionChain[1] && (
            <PokemonChainEvolutionLink
              evolutionChain={props.evolutionChain[1]}
            />
          )}
          {props.evolutionChain[2] && (
            <PokemonChainEvolutionLink
              evolutionChain={props.evolutionChain[2]}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default PokemonChainEvolution;
