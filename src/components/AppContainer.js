import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Logo from "../images/Logo.png";

const AppContainer = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon/?limit=100"
      );
      const { results } = response.data;
      setPokemons(results);
    })();
  }, []);

  console.log(pokemons);
  const pokemonsList = pokemons.map((pokemon, index) => (
    <div className="col-4" key={index}>
      <p>
        <Link to={`/${index + 1}`}>{pokemon.name}</Link>
      </p>
    </div>
  ));
  return (
    <div className="container m-md-5">
      <div className="row mb-3 ml-3 justify-content-center">
        <img className="col-10" src={Logo} alt="pokedex" />
      </div>
      <div className="row mb-3 ml-3">
        <div className="col-10 col-sm-8 col-md-6 col-lg-4 input-group">
          <input className="form-control" type="search" />
          <button className="btn btn-outline-secondary">Busqueda</button>
        </div>
      </div>
      <div className="row mb-3 ml-3">{pokemonsList}</div>
    </div>
  );
};

export default AppContainer;
