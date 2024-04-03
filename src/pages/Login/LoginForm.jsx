import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { UserContext } from "../../UserContext";
import Button from "../../components/UI/Form/Button";
import Error from "../../components/UI/Error";
import InputField from "../../components/UI/Form/InputField";
import useForm from "../../hooks/useForm";
import Title from "../../components/UI/Title";
import styles from "./LoginForm.module.css";

const LoginForm = () => {
  const { userLogin, error, loading } = React.useContext(UserContext);
  const naviga = useNavigate();

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

  function handleSignUp() {
    naviga("/login/criar");
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

        {error && <Error>{error}</Error>}
      </form>

      <Link className={styles.perdeu} to="perdeu">
        Perdeu a senha?
      </Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Button type="button" className={styles.criar} onClick={handleSignUp}>
          Criar
        </Button>
      </div>
    </section>
  );
};

export default LoginForm;
