import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import DogsIcon from "../../assets/dogs.svg?react";
import { UserContext } from "../../UserContext";

const Header = () => {
  const { data } = React.useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={[styles.nav, "container"].join(" ")}>
        <Link className={styles.logo} to="/">
          <DogsIcon />
        </Link>
        {data ? (
          <Link className={styles.login} to="/conta">
            {data.nome}
          </Link>
        ) : (
          <Link className={styles.login} to="/login">
            Login/Criar conta
          </Link>
        )}
      </nav>
    </header>
  );
};

export default React.memo(Header);
