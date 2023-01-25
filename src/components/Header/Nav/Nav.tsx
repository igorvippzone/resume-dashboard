import React from "react";
import { NavLink } from "react-router-dom";
import { ImHome3 } from "react-icons/im";
import { BsFillPersonFill } from "react-icons/bs";

import s from "./Nav.module.scss";

const Nav: React.FC = () => {
  return (
    <nav className={s.nav}>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? s.linkActive : "")}
          >
            <ImHome3 />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/user"
            className={({ isActive }) => (isActive ? s.linkActive : "")}
          >
            <BsFillPersonFill />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
