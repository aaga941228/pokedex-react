import React from "react";
import LogoPokemon from "../assets/LogoPokemon.png";
import { Link } from "react-router-dom";

const Header = props => {
  return (
    <div className="bg-dark p-0 m-0">
      <nav className="navbar">
        <Link to="/" className="col-12 col-sm-10 col-md-8 mx-auto p-5">
          <img
            className="img-fluid pointer"
            src={LogoPokemon}
            alt="pokedex"
            onClick={props.handleClickfilterReset}
          />
        </Link>
      </nav>
    </div>
  );
};

export default Header;
