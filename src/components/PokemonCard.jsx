import React from "react";
import { Link } from "react-router-dom";

const PokemonCard = props => {
  return (
    <div className="col-12 col-sm-4 col-md-3 col-lg-2 mb-2 card bg-dark">
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`}
        className="card-img-top"
        alt="pokemon"
      />
      <div className="card-body d-flex justify-content-around align-items-center">
        <h5 className="card-footer d-inline-block">
          <Link to={`/${props.id}`}>{props.pokemon.name}</Link>
        </h5>
        <h5 className="text-primary">#{props.id}</h5>
      </div>
    </div>
  );
};

export default PokemonCard;
