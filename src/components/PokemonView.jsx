import React from "react";
import PokemonImage from "./PokemonImage";
import PokemonChainEvolution from "./PokemonChainEolution";
import Types from "./Types";
import Sprites from "./Sprites";

const PokemonView = props => {
  const { pokemon } = props;

  return (
    <div className="card col-10 col-md-8 col-lg-6 col-xl-4 my-5 p-3 mx-auto bg-secondary rounded">
      <div className="card bg-transparent my-1 p-1">
        <div className="card-title p-3">
          <p className="fs-lg-1-25">#{pokemon.id}</p>
          <p className="uppercase fs-lg-1-25">{`${pokemon.name} (${pokemon.names[1].name})`}</p>
        </div>
        <PokemonImage id={pokemon.id} />
      </div>
      <Sprites sprites={pokemon.sprites} />
      <Types pokemon={pokemon} />
      <PokemonChainEvolution {...props} />
    </div>
  );
};

export default PokemonView;
