import React, { useEffect, useState } from "react";
import PokedexHome from "./components/PokedexHome";
import PokemonDetails from "./components/PokemonDetails";
import Header from "./components/Header";
import filterByType from "./utils/FilterByType";
import filterByName from "./utils/FilterByName";
import fetchService from "./FetchService";
import typesList from "./utils/Types";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/styles.css";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [types, setTypes] = useState([]);

  useEffect(() => {
    (async () => {
      const pokemonsList = await fetchService.getAllPokemons();
      setPokemons(pokemonsList);
      setTypes(typesList);
    })();
  }, []);

  const handleClickFilter = async e => {
    const listOfPokemonsByType = await filterByType(e.target.id);
    setPokemons(listOfPokemonsByType);
  };

  const handleClickfilterReset = async () => {
    const pokemonsList = await fetchService.getAllPokemons();
    setPokemons(pokemonsList);
  };

  const handleChangeInputName = e => {
    filterByName(e.target.value, pokemons);
  };

  return (
    <Router>
      <Header filterReset={handleClickfilterReset} />
      <Switch>
        <Route exact path="/">
          <PokedexHome
            pokemons={pokemons}
            types={types}
            handleClickFilter={handleClickFilter}
            handleChangeInputName={handleChangeInputName}
            handleClickfilterReset={handleClickfilterReset}
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
