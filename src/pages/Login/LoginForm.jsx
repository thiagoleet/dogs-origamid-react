import React from "react";
import { Link } from "react-router-dom";

import { UserContext } from "../../context/UserContext";
import Button, { LinkButton } from "@components/UI/Form/Button";
import Error from "@components/UI/helpers/Error";
import InputField from "@components/UI/Form/InputField";
import Title from "@components/UI/helpers/Title";
import useForm from "@hooks/useForm";
import styles from "./LoginForm.module.css";

const LoginForm = () => {
  const { userLogin, error, loading } = React.useContext(UserContext);

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
    <section className="animeLeft">
      <Title>Login</Title>
      <form onSubmit={handleSubmit} className={styles.form}>
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
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}

        {error && <Error>Dados incorretos.</Error>}
      </form>

      <Link className={styles.perdeu} to="perdeu">
        Perdeu a senha?
      </Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <LinkButton to="criar" className={styles.criar}>
          Criar
        </LinkButton>
      </div>
    </section>
  );
};

export default LoginForm;
