import React from "react";
import { useLocation } from "react-router-dom";

import Title from "@components/UI/helpers/Title";
import Head from "@components/Helpers/Head";
import UserHeaderNav from "./UserHeaderNav";
import styles from "./UserHeader.module.css";

const UserHeader = () => {
  const [title, setTitle] = React.useState("");
  const location = useLocation();

  React.useEffect(() => {
    const { pathname } = location;
    switch (pathname) {
      case "/conta/postar":
        setTitle("Poste Sua Foto");
        break;
      case "/conta/estatisticas":
        setTitle("Estatísticas");
        break;
      default:
        setTitle("Minha Conta");
    }
  }, [location]);

  return (
    <>
      <Head title={title} />
      <header className={styles.header}>
        <Title>{title}</Title>
        <UserHeaderNav />
      </header>
    </>
  );
};

export default UserHeader;
