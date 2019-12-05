import React from "react";
import Logo from "../assets/Logo-bw.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container">
      <nav className="navbar d-flex flex-column">
        <div className="row">
          <Link to="/" className="col-8 mx-auto">
            <img className="img-fluid" src={Logo} alt="pokedex" />
          </Link>
        </div>
        <div className="row">
          <div className="col-12 mx-auto input-group">
            <input className="form-control" type="search" />
            <button className="btn btn-outline-dark">Busqueda</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
