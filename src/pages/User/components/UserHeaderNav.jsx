import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/UserContext";
import styles from "./UserHeaderNav.module.css";

// icons
import MinhasFotosSvg from "../../../assets/feed.svg?react";
import EstatisticasSvg from "../../../assets/estatisticas.svg?react";
import AdicionarFotoSvg from "../../../assets/adicionar.svg?react";
import SairSvg from "../../../assets/sair.svg?react";

const texts = {
  feed: "Minhas Fotos",
  userStats: "Estatísticas",
  userPhotoPost: "Adicionar Foto",
  logout: "Sair",
};

const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);
  const [mobile, setMobile] = React.useState(null);
  const navigate = useNavigate();

  function handleLogout() {
    userLogout();
    navigate("/login");
  }

  return (
    <nav className={styles.nav}>
      <NavLink to="" title={texts.feed} end>
        <MinhasFotosSvg />
        {mobile && texts.feed}
      </NavLink>
      <NavLink to="estatisticas" title={texts.userStats}>
        <EstatisticasSvg />
        {mobile && texts.userStats}
      </NavLink>
      <NavLink to="postar" title={texts.userPhotoPost}>
        <AdicionarFotoSvg />
        {mobile && texts.userPhotoPost}
      </NavLink>
      <button onClick={handleLogout} title={texts.logout}>
        <SairSvg />
        {mobile && texts.logout}
      </button>
    </nav>
  );
};

export default UserHeaderNav;
