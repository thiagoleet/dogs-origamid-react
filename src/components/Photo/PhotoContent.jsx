import React from "react";
import { Link } from "react-router-dom";
import styles from "./PhotoContent.module.css";
import Title from "../UI/helpers/Title";
import PhotoComments from "./PhotoComments";
import { UserContext } from "../../context/UserContext";
import PhotoDelete from "./PhotoDelete";

const PhotoContent = ({ data }) => {
  const user = React.useContext(UserContext);
  const { photo, comments } = data;

  return (
    <div className={styles.photo}>
      <div className={styles.img}>
        <img src={photo.src} alt={photo.title} />
      </div>
      <div className={styles.details}>
        <div>
          <p className={styles.author}>
            {user.data && user.data.username === photo.author ? (
              <PhotoDelete id={photo.id} />
            ) : (
              <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            )}
            <span className={styles.visualizacoes}>{photo.acessos}</span>
          </p>
          <Title>
            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
          </Title>
          <ul className={styles.attributes}>
            <li>{photo.peso} kg</li>
            <li>
              {photo.idade > 1 ? `${photo.idade} anos` : `${photo.idade} ano`}
            </li>
          </ul>
        </div>
      </div>
      <PhotoComments id={photo.id} comments={comments} />
    </div>
  );
};

export default PhotoContent;
