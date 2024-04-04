import React from "react";
import styles from "./PhotoDelete.module.css";
import api from "../../util/api";
import useFetch from "../../hooks/useFetch";

const PhotoDelete = ({ id }) => {
  const { loading, request } = useFetch();

  async function handleClick() {
    const confirm = window.confirm("Tem certeza que deseja deletar?");

    if (confirm) {
      const { url, options } = api.PHOTO_DELETE(id);
      const { response } = await request(url, options);

      if (response.ok) {
        window.location.reload();
      }
    }
  }

  return (
    <>
      {loading ? (
        <button className={styles.delete}>Apagando...</button>
      ) : (
        <button className={styles.delete} onClick={handleClick}>
          Delete
        </button>
      )}
    </>
  );
};

export default PhotoDelete;
