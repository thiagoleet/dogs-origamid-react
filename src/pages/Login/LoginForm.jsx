import React from "react";
import { Link } from "react-router-dom";
import api from "../../util/api";

import Button from "../../components/UI/Form/Button";
import InputField from "../../components/UI/Form/InputField";

const LoginForm = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const url = `${api.URL}${api.token}`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <InputField
          type="text"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
          placeholder="Usuário"
          label="Usuário"
          name="username"
        />
        <InputField
          type="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          placeholder="Senha"
          label="Senha"
          name="password"
        />
        <Button>Entrar</Button>
      </form>
      <div>
        <pre>{username}</pre>
        <pre>{password}</pre>
      </div>
      <Link to="criar">Criar</Link>
    </section>
  );
};

export default LoginForm;
