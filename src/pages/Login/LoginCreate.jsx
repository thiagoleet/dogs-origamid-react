import React from "react";
import Title from "../../components/UI/helpers/Title";
import InputField from "../../components/UI/form/InputField";
import { Button } from "../../components/UI/form/Button";
import useForm from "../../hooks/useForm";
import api from "../../util/api";
import { UserContext } from "../../context/UserContext";
import useFetch from "../../hooks/useFetch";
import Error from "../../components/UI/helpers/Error";

const LoginCreate = () => {
  const username = useForm({ type: "text", validation: true });
  const email = useForm({ type: "email", validation: true });
  const password = useForm({ type: "password", validation: true });

  const { userLogin } = React.useContext(UserContext);
  const { loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();

    const { url, options } = api.USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });

    const { response, json } = await request(url, options);

    if (response.ok) {
      await userLogin(username.value, password.value);
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
        {error && <Error error={error} />}
      </form>
    </section>
  );
};

export default LoginCreate;
