import React, { useState, useEffect, useMemo } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import throttle from 'lodash/throttle';
import PokedexHome from './components/PokedexHome';
import PokemonDetails from './components/PokemonDetails';
import Header from './components/Header';
import filterByType from './utils/filterByType';
import filterByName from './utils/filterByName';
import fetchService from './fetchService';
import './assets/styles/styles.css';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [types, setTypes] = useState([]);
  const [filter, setFilter] = useState('');

  const fetchPokemons = async () => {
    const pokemonsList = await fetchService.getAllPokemons();
    setPokemons(pokemonsList);
  };

  const fetchTypes = async () => {
    const typesList = await fetchService.getAllTypes();
    setTypes(typesList);
  };

  useEffect(() => {
    fetchPokemons();
    fetchTypes();
  }, []);

  const handleClickFilter = async e => {
    const listOfPokemonsByType = await filterByType(e.target.id);
    setPokemons(listOfPokemonsByType);
  };

  const handleClickfilterReset = () => {
    setFilter('');
    fetchPokemons();
  };

  const handleChangeInputName = throttle(e => {
    setFilter(e.target.value || '');
  }, 1000);

  const filteredPokemons = useMemo(() => filterByName(filter, pokemons), [
    pokemons,
    filter
  ]);
  
  return (
    <Router>
      <Header handleClickfilterReset={handleClickfilterReset} />
      <Switch>
        <Route exact path='/'>
          <PokedexHome
            pokemons={filteredPokemons}
            types={types}
            handleClickFilter={handleClickFilter}
            handleChangeInputName={handleChangeInputName}
          />
        </Route>
        <Route exact path='/:id'>
          <PokemonDetails pokemons={filteredPokemons} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
