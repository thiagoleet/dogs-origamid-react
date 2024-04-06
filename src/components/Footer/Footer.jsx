import React from "react";
import styles from "./Footer.module.css";
import DogsFooterSvg from "../../assets/dogs-footer.svg?react";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <DogsFooterSvg />
      <p>Alguns direitos reservados</p>
    </footer>
  );
};

export default Footer;
