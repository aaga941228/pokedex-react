import React from "react";
import { Link } from "react-router-dom";
import LogoPokemon from "../assets/LogoPokemon.png";

const Header = ({ handleClickfilterReset }) => (
  <nav className="navbar bg-secondary">
    <Link to="/" className="col-sm-8 col-md-6 mx-auto p-5">
      <img
        className="img-fluid pointer"
        src={LogoPokemon}
        alt="pokedex"
        onClick={handleClickfilterReset}
      />
    </Link>
  </nav>
)

export default Header;
