import React from "react";
import EnviarSvg from "../../assets/enviar.svg?react";
import useFetch from "../../hooks/useFetch";
import Error from "../UI/helpers/Error";
import api from "../../util/api";
import styles from "./PhotoCommentsForm.module.css";

const PhotoCommentsForm = ({ id, setComments, single }) => {
  const [comment, setComment] = React.useState("");
  const { request, error, loading } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = api.COMMENT_POST(id, { comment });
    const { response, json } = await request(url, options);

    if (response.ok) {
      setComment("");
      setComments((comments) => [...comments, json]);
    }
  }

  return (
    <form
      className={`${styles.form} ${single ? styles.single : ""}`}
      onSubmit={handleSubmit}
    >
      <textarea
        className={styles.textarea}
        id="comment"
        name="comment"
        placeholder="Comente..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button disabled={loading} className={styles.button}>
        <EnviarSvg />
      </button>
      {error && <Error>{error}</Error>}
    </form>
  );
};

export default PhotoCommentsForm;
