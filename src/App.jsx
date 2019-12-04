import React from "react";
import AppContainer from "./components/AppContainer";
import PokemonDetails from "./components/PokemonDetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <AppContainer />
        </Route>
        <Route exact path="/:id">
          <PokemonDetails />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
