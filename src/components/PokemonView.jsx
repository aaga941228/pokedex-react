import React from "react";

const PokemonView = props => {
  return (
    <div className="card col-md-8 p-md-5 bg-dark text-primary">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h3>{`${props.pokemon.name}(${props.pokemon.names[1].name})`}</h3>
        <h5>#{props.pokemon.id}</h5>
      </div>
      <div className="card-body">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.pokemon.id}.png`}
          className="card-img-top"
          alt="pokemon"
        />
      </div>
    </div>
  );
};

export default PokemonView;
