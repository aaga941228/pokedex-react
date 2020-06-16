import React from "react";
import PokemonImage from "./PokemonImage";
import Types from "./Types";
import Sprites from "./Sprites";

const PokemonView = ({ pokemon }) => (
    <div className="row justify-content-center">
      <div className="col-8 col-md-6 col-xl-4">
        <div className="card my-3 p-3 mx-auto bg-secondary rounded shadow">
          <div className="card-title p-1">
            <div className="card bg-transparent my-1 p-3">
              <p className="fs-lg-1-25">#{pokemon.id}</p>
              <p className="uppercase fs-lg-1-25">{`${pokemon.name} (${pokemon.names[1].name})`}</p>
            </div>
          </div>
          <div className="card bg-transparent my-1 p-1">
            <PokemonImage id={pokemon.id} name={pokemon.name}/>
          </div>
        </div>
      </div>
      <div className="col-8 col-md-6 col-xl-4">
        <div className="card my-3 p-3 mx-auto bg-secondary rounded shadow">
          <div className="card bg-transparent my-1 p-3">
              <p className="uppercase fs-lg-1-25">Sprites</p>
            </div>
            <Sprites sprites={pokemon.sprites} name={pokemon.name}/>
            <Types pokemon={pokemon} />
          </div>
      </div>
    </div>
);

export default PokemonView;
