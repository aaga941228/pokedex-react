import React from "react";
import { Link } from "react-router-dom";
import PokemonImage from "./PokemonImage";

const PokemonCard = props => {
  return (
    <div className="col-10 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-2 card bg-dark">
      <PokemonImage id={props.id} />
      <div className="card-body d-flex justify-content-around align-items-center">
        <h5 className="card-text d-inline-block">
          <Link to={`/${props.id}`}>{props.pokemon.name}</Link>
        </h5>
        <h5 className="text-primary">#{props.id}</h5>
      </div>
    </div>
  );
};

export default PokemonCard;
