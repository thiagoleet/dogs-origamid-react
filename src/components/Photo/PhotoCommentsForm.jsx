import React from "react";
import EnviarSvg from "../../assets/enviar.svg?react";
import useFetch from "../../hooks/useFetch";
import Error from "../UI/helpers/Error";
import api from "../../util/api";

const PhotoCommentsForm = ({ id, setComments }) => {
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
    <>
      {error && <Error>{error}</Error>}
      <form onSubmit={handleSubmit}>
        <textarea
          required
          id="comment"
          name="comment"
          placeholder="Comente..."
          value={comment}
          onChange={({ target }) => setComment(target.value)}
        />
        <button disabled={loading}>
          <EnviarSvg />
        </button>
      </form>
    </>
  );
};

export default PhotoCommentsForm;
