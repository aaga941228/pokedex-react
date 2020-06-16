import React from "react";

const PokemonImage = ({ id, name }) => (
  <img
    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
    className="card-img-top img-fluid p-2 pixelated"
    alt={name}
  />
)

export default PokemonImage;
