import React from "react";
import PokedexHome from "./components/PokedexHome";
import PokemonDetails from "./components/PokemonDetails";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <PokedexHome />
        </Route>
        <Route exact path="/:id">
          <PokemonDetails />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
