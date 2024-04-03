import React from "react";
import { Link } from "react-router-dom";
import api from "../../util/api";

import Button from "../../components/UI/Form/Button";
import InputField from "../../components/UI/Form/InputField";
import useForm from "../../hooks/useForm";

const LoginForm = () => {
  const username = useForm({
    type: "text",
    validate: true,
  });
  const password = useForm({
    type: "password",
    validate: true,
  });

  React.useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      getUser(token);
    }
  }, []);

  async function getUser(token) {
    const { url, options } = api.USER_GET(token);
    const response = await fetch(url, options);
    const data = await response.json();
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const { url, options } = api.TOKEN_POST({
      username: username.value,
      password: password.value,
    });

    const response = await fetch(url, options);
    const { token } = await response.json();
    window.localStorage.setItem("token", token);

    await getUser(token);
  }

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <InputField
          placeholder="Usuário"
          label="Usuário"
          name="username"
          required
          {...username}
        />
        <InputField
          placeholder="Senha"
          label="Senha"
          name="password"
          required
          {...password}
        />
        <Button>Entrar</Button>
      </form>

      <Link to="criar">Criar</Link>
    </section>
  );
};

export default LoginForm;
