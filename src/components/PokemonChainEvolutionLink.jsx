import React from "react";
import { Link } from "react-router-dom";
import PokemonImageMini from "./PokemonImageMini";

const PokemonChainEvolutionLink = props => {
  return (
    <Link to={`/${props.evolutionChain.id}`} className="col p-0 m-1">
      <div className="d-flex justify-content-center">
        <p className="d-inline-block white uppercase">
          {props.evolutionChain.name}
        </p>
      </div>
      <PokemonImageMini id={props.evolutionChain.id} />
    </Link>
  );
};

export default PokemonChainEvolutionLink;
