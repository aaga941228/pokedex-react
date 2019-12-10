import React from "react";
import { Link } from "react-router-dom";
import PokemonImage from "./PokemonImage";

const PokemonCard = props => {
  return (
    <div
      className="col-10 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-2 mx-auto card bg-dark pointer"
      id={`pokemon-${props.pokemon.id}`}
    >
      <Link to={`/${props.pokemon.id}`} params={{ props }}>
        <PokemonImage id={props.pokemon.id} />
        <div className="card-body d-flex justify-content-around align-items-center">
          <h5 className="card-text d-inline-block">{props.pokemon.name}</h5>
          <h5 className="text-primary">#{props.pokemon.id}</h5>
        </div>
      </Link>
    </div>
  );
};

export default PokemonCard;
