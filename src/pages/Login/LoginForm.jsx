import React from "react";
import { Link } from "react-router-dom";
import api from "../../util/api";

import Button from "../../components/UI/Form/Button";
import InputField from "../../components/UI/Form/InputField";
import useForm from "../../hooks/useForm";
import { UserContext } from "../../UserContext";

const LoginForm = () => {
  const { userLogin } = React.useContext(UserContext);

  const username = useForm({
    type: "text",
    validation: true,
  });
  const password = useForm({
    type: "password",
    validation: true,
  });

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      await userLogin(username.value, password.value);
    }
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
