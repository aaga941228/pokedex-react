import React from "react";
import { Link } from "react-router-dom";
import PokemonImage from "./PokemonImage";

const PokemonCard = ({ pokemon }) => (
  <div className="col-6 col-md-4 col-lg-2 p-2 mx-auto">
    {!!pokemon && (
      <div
        className="p-1 card bg-secondary pointer shadow"
        id={`pokemon-${pokemon.id}`}
      >
        <Link to={`/${pokemon.id}`}>
          <PokemonImage id={pokemon.id} />
          <div className="card-footer bg-transparent p-1 white">
            <p className="card-text">#{pokemon.id}</p>
            <p className="card-text uppercase">{pokemon.name}</p>
          </div>
        </Link>
      </div>
    )}
  </div>
);

export default PokemonCard;
