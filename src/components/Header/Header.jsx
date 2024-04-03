import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className="container">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/login">Login/Criar conta</NavLink>
      </nav>
    </header>
  );
};

export default React.memo(Header);
