import React from "react";
import { useDispatch } from "react-redux";
import { userLogin } from "@features/user/reducer";
import Title from "@components/UI/helpers/Title";
import InputField from "@components/UI/Form/InputField";
import Button from "@components/UI/Form/Button";
import Error from "@components/UI/helpers/Error";
import useForm from "@hooks/useForm";
import useFetch from "@hooks/useFetch";
import api from "@util/api";

const LoginCreate = () => {
  const dispatch = useDispatch();
  const username = useForm({ type: "text", validation: true });
  const email = useForm({ type: "email", validation: true });
  const password = useForm({ type: "password", validation: true });

  const { loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();

    const { url, options } = api.USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });

    const { response } = await request(url, options);

    if (response.ok) {
      dispatch(
        userLogin({ username: username.value, password: password.value })
      );
    }
  }

  return (
    <section className="animeLeft">
      <Title>Cadastre-se</Title>
      <form onSubmit={handleSubmit}>
        <InputField label="Usuário" name="username" required {...username} />
        <InputField label="Email" name="email" required {...email} />
        <InputField label="Senha" name="password" required {...password} />

        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}

        {error && <Error>{error}</Error>}
      </form>
    </section>
  );
};

export default LoginCreate;
