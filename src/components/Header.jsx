import React from "react";
import { Link } from "react-router-dom";
import LogoPokemon from "../assets/LogoPokemon.png";

const Header = props => {
  return (
    <nav className="navbar bg-secondary">
      <Link to="/" className="col-12 col-sm-10 col-md-8 mx-auto p-3">
        <img
          className="img-fluid pointer"
          src={LogoPokemon}
          alt="pokedex"
          onClick={props.handleClickfilterReset}
        />
      </Link>
    </nav>
  );
};

export default Header;
