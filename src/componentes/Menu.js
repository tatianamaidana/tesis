import React from "react";
import { Link } from "react-router-dom";
function Menu() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/consuelo">Vista1</Link>
          </li>
          <li>
            <Link to="/sombra">Vista2</Link>
          </li>
          <li>
            <Link to="/Escalera">Escalera</Link>
          </li>

          <Link to="/sombra">
          <button className="boton2">
              Ir a vista 2
          </button>

          <Link to="/consuelo">
            ajbscakbckasbcksaba
          </Link>
      </Link> 
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
