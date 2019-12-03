import React from "react";
import AppContainer from "./components/AppContainer";
import PokemonDetails from "./components/PokemonDetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <AppContainer />
        </Route>
        <Route path="/:id">
          <PokemonDetails />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
