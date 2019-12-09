import React from "react";
import Logo from "../assets/Logo-bw.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-dark p-0 m-0">
      <nav className="navbar">
        <Link to="/" className="col-8 mx-auto">
          <img className="img-fluid pointer" src={Logo} alt="pokedex" />
        </Link>
      </nav>
    </div>
  );
};

export default Header;
