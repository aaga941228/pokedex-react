import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
    <div className="pokemons_element" key={index}>
      <p>
        <Link to={`/${index + 1}`}>{pokemon.name}</Link>
      </p>
    </div>
  ));
  return (
    <div className="container">
      <div className="header">
        <img
          className="header_log"
          src="../../public/PokedexLogo.png"
          alt="pokedex"
        />
      </div>
      <div className="pokemons">{pokemonsList}</div>
    </div>
  );
};

export default AppContainer;
