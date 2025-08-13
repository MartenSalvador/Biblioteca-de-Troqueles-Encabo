import React from "react";

import { Link } from "react-router-dom";
import '../estilos/Nav.css';

function Nav() {
  return (
    <nav className="nav">
      <Link to="/" >Buscar Troquel</Link>
      <Link to="/Agregar">Agregar Nuevo Troquel</Link>
    </nav>
  );

}

export default Nav;