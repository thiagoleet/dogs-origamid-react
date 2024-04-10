import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Button, { LinkButton } from "@components/UI/Form/Button";
import Error from "@components/UI/helpers/Error";
import InputField from "@components/UI/Form/InputField";
import Title from "@components/UI/helpers/Title";
import useForm from "@hooks/useForm";
import { userLogin } from "@features/user/reducer";
import styles from "./LoginForm.module.css";

const LoginForm = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const user = useSelector((state) => state.user);
  const loading = token.loading || user.loading;
  const error = token.error || user.error;

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
      await dispatch(
        userLogin({ username: username.value, password: password.value })
      );
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
