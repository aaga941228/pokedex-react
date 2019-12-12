import React from "react";

const PokemonImage = props => {
  return (
    <img
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`}
      className="card-img-top img-fluid p-5"
      alt="pokemon"
    />
  );
};

export default PokemonImage;
