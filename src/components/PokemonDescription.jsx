import React from "react";

const PokemonDescription = props => {
  // console.log("props: ", props);
  const description = `
    habitat: ${props.pokemon.habitat.name},
    original state: unknow,
    first evolution: unknow,
    second evolution: unknow
  `;
  return <div className="card-text">{description}</div>;
};

export default PokemonDescription;
