import React, { useState, useEffect } from "react";
import PokedexHome from "./components/PokedexHome";
import PokemonDetails from "./components/PokemonDetails";
import Header from "./components/Header";
import filterByType from "./utils/filterByType";
import filterByName from "./utils/filterByName";
import fetchService from "./fetchService";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./assets/styles/styles.css";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [types, setTypes] = useState([]);

  useEffect(() => {
    fetchPokemons();
    fetchTypes();
  }, []);

  const fetchPokemons = async () => {
    const pokemonsList = await fetchService.getAllPokemons();
    setPokemons(pokemonsList);
  };

  const fetchTypes = async () => {
    const typesList = await fetchService.getAllTypes();
    setTypes(typesList);
  };

  const handleClickFilter = async e => {
    const listOfPokemonsByType = await filterByType(e.target.id);
    setPokemons(listOfPokemonsByType);
  };

  const handleClickfilterReset = async () => {
    const pokemonsList = await fetchService.getAllPokemons();
    setPokemons(pokemonsList);
  };

  const handleChangeInputName = e => {
    const { value } = e.target;
    if (!value) {
      handleClickfilterReset();
    }
    const pokemonsListFilter = filterByName(value, pokemons);
    setPokemons(pokemonsListFilter);
  };

  return (
    <Router>
      <Header handleClickfilterReset={handleClickfilterReset} />
      <Switch>
        <Route exact path="/">
          <PokedexHome
            pokemons={pokemons}
            types={types}
            handleClickFilter={handleClickFilter}
            handleChangeInputName={handleChangeInputName}
          />
        </Route>
        <Route exact path="/:id">
          <PokemonDetails pokemons={pokemons} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
