import React from "react";
import { Link } from "react-router-dom";
import PokemonImageMini from "./PokemonImageMini";

const PokemonChainEvolutionLink = ({ evolutionChain }) => (
  <Link to={`/${evolutionChain.id}`} className="col p-0 m-1">
    <div className="d-flex justify-content-center">
      <p className="d-inline-block white uppercase">
        {evolutionChain.name}
      </p>
    </div>
    <PokemonImageMini id={evolutionChain.id} />
  </Link>
)

export default PokemonChainEvolutionLink;
