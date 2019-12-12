import React from "react";
import LogoPokemon from "../assets/LogoPokemon.png";
import { Link } from "react-router-dom";

const Header = props => {
  return (
    <nav className="navbar bg-dark">
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
