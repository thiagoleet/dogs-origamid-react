import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import DogsIcon from "../../assets/dogs.svg?react";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={[styles.nav, "container"].join(" ")}>
        <NavLink className={styles.logo} to="/">
          <DogsIcon />
        </NavLink>
        <NavLink className={styles.login} to="/login">
          Login/Criar conta
        </NavLink>
      </nav>
    </header>
  );
};

export default React.memo(Header);
