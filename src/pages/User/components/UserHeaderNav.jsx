import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogout } from "@features/user/reducer";
import useMedia from "@hooks/useMedia";
import styles from "./UserHeaderNav.module.css";

// icons
import MinhasFotosSvg from "@assets/feed.svg?react";
import EstatisticasSvg from "@assets/estatisticas.svg?react";
import AdicionarFotoSvg from "@assets/adicionar.svg?react";
import SairSvg from "@assets/sair.svg?react";

const texts = {
  feed: "Minhas Fotos",
  userStats: "Estatísticas",
  userPhotoPost: "Adicionar Foto",
  logout: "Sair",
};

const UserHeaderNav = () => {
  const dispatch = useDispatch();
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const mobile = useMedia("(max-width: 40rem)");
  const navigate = useNavigate();
  const { pathname } = useLocation();

  function handleLogout() {
    dispatch(userLogout());
    navigate("/login");
  }

  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <button
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          aria-label="Menu"
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}
      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
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
    </>
  );
};

export default UserHeaderNav;
