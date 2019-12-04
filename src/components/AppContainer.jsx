import React from "react";
import { useState, useEffect } from "react";
import Logo from "../assets/Logo-bw.png";
import PokemonCard from "./PokemonCard";
import getAllPokemons from "../utils/GetAllPokemons";

const AppContainer = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await getAllPokemons();
      const { results } = response.data;
      setPokemons(results);
    })();
  }, []);

  const pokemonsList = pokemons.map((pokemon, index) => (
    <PokemonCard key={index} pokemon={pokemon} id={index + 1} />
  ));

  return (
    <div className="container-fluid p-3">
      <div className="row justify-content-center">
        <img className="col-8" src={Logo} alt="pokedex" />
      </div>
      <div className="row mb-3">
        <div className="col-10 col-sm-8 col-md-6 col-lg-4 input-group">
          <input className="form-control" type="search" />
          <button className="btn btn-outline-dark">Busqueda</button>
        </div>
      </div>
      <div className="row mb-3 p-3">{pokemonsList}</div>
    </div>
  );
};

export default AppContainer;
