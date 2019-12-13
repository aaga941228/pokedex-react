import React from "react";

const PokemonImageMini = props => {
  return (
    <img
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`}
      className="img-fluid col-12 p-0 pixelated"
      alt="pokemon"
    />
  );
};

export default PokemonImageMini;
