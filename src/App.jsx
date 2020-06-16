import React, { useState, useEffect, useMemo } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import throttle from 'lodash/throttle';
import PokedexHome from './components/PokedexHome';
import PokemonDetails from './components/PokemonDetails';
import Header from './components/Header';
import filterByType from './utils/filterByType';
import filterByName from './utils/filterByName';
import { getAllPokemons, getAllTypes } from './pokemonService';
import './assets/styles/styles.css';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [types, setTypes] = useState([]);
  const [filter, setFilter] = useState('');
  const [limit, setLimit] = useState(50);
  const [offset, setOffset] = useState(1)

  const fetchFiftyPokemons = async () => {
    const data = await getAllPokemons(limit, offset);
    setPokemons([...pokemons, ...data]);
  };

  const fetchTypes = async () => {
    const typesList = await getAllTypes();
    setTypes(typesList);
  };

  const handleClickMorePokemons = () => {
    setLimit(limit + 50)
    setOffset(offset + 50)
  }

  useEffect(() => {
    fetchFiftyPokemons();
    fetchTypes();
  }, [limit]);

  const handleClickFilter = async e => {
    const listOfPokemonsByType = await filterByType(e.target.id);
    setPokemons(listOfPokemonsByType);
  };

  const handleClickfilterReset = () => {
    setFilter('');
    fetchFiftyPokemons();
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
            handleClickMorePokemons={handleClickMorePokemons}
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
