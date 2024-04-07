import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./UserPhotoPost.module.css";
import InputField from "../../components/UI/Form/InputField";
import FormControl from "../../components/UI/Form/FormControl";
import Button from "../../components/UI/Form/Button";
import Error from "../../components/UI/helpers/Error";
import useForm from "../../hooks/useForm";
import useFetch from "../../hooks/useFetch";
import api from "../../util/api";

const UserPhotoPost = () => {
  const nome = useForm({ type: "text" });
  const peso = useForm({ type: "number" });
  const idade = useForm({ type: "number" });
  const [img, setImg] = React.useState({});
  const { data, error, loading, request } = useFetch();
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append("img", img.raw);
    formData.append("nome", nome.value);
    formData.append("peso", peso.value);
    formData.append("idade", idade.value);

    const token = window.localStorage.getItem("token");
    const { url, options } = api.PHOTO_POST(formData, token);
    await request(url, options);
  }

  function handleImgChange({ target }) {
    const [file] = target.files;
    setImg({ raw: file, preview: URL.createObjectURL(file) });
  }

  React.useEffect(() => {
    if (data) {
      navigate("/conta");
    }
  }, [data, navigate]);

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <form onSubmit={handleSubmit}>
        <InputField label="Nome" required {...nome} />
        <InputField label="Peso" required {...peso} />
        <InputField label="Idade" required {...idade} />

        <FormControl>
          <input type="file" name="img" id="img" onChange={handleImgChange} />
        </FormControl>
        {loading ? (
          <Button disabled>Enviando...</Button>
        ) : (
          <Button>Enviar</Button>
        )}
        {error && <Error>{error}</Error>}
      </form>
      <div>
        {img.preview && (
          <div
            className={styles.preview}
            style={{ backgroundImage: `url('${img.preview}')` }}
          ></div>
        )}
      </div>
    </section>
  );
};

export default UserPhotoPost;
