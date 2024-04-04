import React from "react";
import Title from "../../components/UI/helpers/Title";
import InputField from "../../components/UI/form/InputField";
import { Button } from "../../components/UI/form/Button";
import useForm from "../../hooks/useForm";
import api from "../../util/api";
import { UserContext } from "../../UserContext";

const LoginCreate = () => {
  const username = useForm({ type: "text", validation: true });
  const email = useForm({ type: "email", validation: true });
  const password = useForm({ type: "password", validation: true });

  const { userLogin } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    const { url, options } = api.USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });

    const response = await fetch(url, options);
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
        <Button>Cadastrar</Button>
      </form>
    </section>
  );
};

export default LoginCreate;
