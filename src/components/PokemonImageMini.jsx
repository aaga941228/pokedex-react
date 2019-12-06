import React from "react";

const PokemonImageMini = props => {
  return (
    <img
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`}
      className="card-img-top"
      alt="pokemon"
    />
  );
};

export default PokemonImageMini;
