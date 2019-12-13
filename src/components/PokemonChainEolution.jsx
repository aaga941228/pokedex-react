import React from "react";
import PokemonImageMini from "./PokemonImageMini";
import { Link } from "react-router-dom";

const PokemonChainEvolution = props => {
  return (
    <div className="card p-3 bg-transparent">
      <div className="card-title p-3 d-flex justify-content-center">
        <p className="d-inline-block uppercase">Chain evolution</p>
      </div>
      {props.evolutionChain[0] && (
        <div className="row d-flex justify-content-around">
          <Link to={`/${props.evolutionChain[0].id}`} className="col p-0 m-1">
            <div className="d-flex justify-content-center">
              <p className="d-inline-block white uppercase">
                {props.evolutionChain[0].name}
              </p>
            </div>
            <PokemonImageMini id={props.evolutionChain[0].id} />
          </Link>
          {props.evolutionChain[1] && (
            <Link to={`/${props.evolutionChain[1].id}`} className="col p-0 m-1">
              <div className="d-flex justify-content-center">
                <p className="d-inline-block white uppercase">
                  {props.evolutionChain[1].name}
                </p>
              </div>
              <PokemonImageMini id={props.evolutionChain[1].id} />
            </Link>
          )}
          {props.evolutionChain[2] && (
            <Link to={`/${props.evolutionChain[2].id}`} className="col p-0 m-1">
              <div className="d-flex justify-content-center">
                <p className="d-inline-block white uppercase">
                  {props.evolutionChain[2].name}
                </p>
              </div>
              <PokemonImageMini id={props.evolutionChain[2].id} />
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default PokemonChainEvolution;
