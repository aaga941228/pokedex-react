import React from "react";
import PokemonImageMini from "./PokemonImageMini";
import PokemonImage from "./PokemonImage";

const PokemonChainEvolution = ({ evolutionChain }) => (
    <div className="col-12">
      <div className="card my-3 p-3 mx-auto bg-secondary rounded shadow">
        <div className="card bg-transparent my-1 p-1">
          <div className="card bg-transparent my-1 p-1">
            <p className="d-inline-block">Chain evolution</p>
          </div>
        </div>
      {evolutionChain[0] && (
      <div className="card bg-transparent my-1 p-1">
        <PokemonImage id={evolutionChain[0].id} />
        {evolutionChain[1] && (
          <PokemonImage id={evolutionChain[1].id} />
        )}
        {evolutionChain[2] && (
          <PokemonImage id={evolutionChain[2].id} />
        )}
      </div>
    )}
    </div>
    </div>
    
)
export default PokemonChainEvolution;
