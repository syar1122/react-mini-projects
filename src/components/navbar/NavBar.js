import React from "react";
import "./navBar.css";

import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <div className="nav-wrapper deep-purple darken-1">
        <NavLink to="/" className="right brand-logo">
          miniPROJECTS
        </NavLink>

        <ul className="hide-on-med-and-down">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/todos">Todos</NavLink>
          </li>
          <li>
            <NavLink to="/quotes">Quotes</NavLink>
          </li>
          <li>
            <NavLink to="/dogs">Love Dogs?</NavLink>
          </li>
        </ul>
        <NavLink
          to="#"
          data-target="mobile-demo right"
          className="sidenav-trigger"
        >
          <i className="material-icons">menu</i>
        </NavLink>
      </div>
    </nav>
  );
}
