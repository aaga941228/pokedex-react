import React from "react";
import PokemonImageMini from "./PokemonImageMini";

const PokemonDescription = props => {
  const description = `
    ${props.pokemon.name}, this pokemon lives in ${props.pokemon.habitat.name}
  `;

  const PokemonChainImages = props.evolutionChain[0] && (
    <div>
      <PokemonImageMini id={props.evolutionChain[0].id} />
      <PokemonImageMini id={props.evolutionChain[1].id} />
      {props.evolutionChain[2] && (
        <PokemonImageMini id={props.evolutionChain[2].id} />
      )}
    </div>
  );

  return (
    <div className="card p-3 bg-transparent">
      <div className="card-body">
        <div className="card-title">
          <p className="display-5" styles={{ fontSize: "20px" }}>
            {description}
          </p>
          <p className="display-5">Chain evolution</p>
        </div>
        <div className="card-body">{PokemonChainImages}</div>
      </div>
    </div>
  );
};

export default PokemonDescription;
