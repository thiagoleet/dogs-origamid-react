import React from "react";
import Title from "../../components/UI/helpers/Title";
import InputField from "../../components/UI/form/InputField";
import Button from "../../components/UI/form/Button";
import useForm from "../../hooks/useForm";
import useFetch from "../../hooks/useFetch";
import api from "../../util/api";
import Error from "../../components/UI/helpers/Error";
import Success from "../../components/UI/helpers/Success";

const LoginPasswordLost = () => {
  const login = useForm({ type: "text" });
  const { data, loading, error, request } = useFetch();

  async function handleSubmit(e) {
    e.preventDefault();

    if (login.validate()) {
      const { url, options } = api.PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace("perdeu", "resetar"),
      });

      await request(url, options);
    }
  }

  return (
    <section>
      <Title>Perdeu a senha?</Title>
      {data ? (
        <Success>{data}</Success>
      ) : (
        <form onSubmit={handleSubmit}>
          <InputField
            label="Email /  Usuário"
            name="login"
            required
            {...login}
          />
          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar E-mail</Button>
          )}
        </form>
      )}
      {error && <Error>{error}</Error>}
    </section>
  );
};

export default LoginPasswordLost;
