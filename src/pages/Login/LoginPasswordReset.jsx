import React from "react";
import { useNavigate } from "react-router-dom";
import Title from "../../components/UI/helpers/Title";
import InputField from "../../components/UI/form/InputField";
import Button from "../../components/UI/form/Button";
import useForm from "../../hooks/useForm";
import useFetch from "../../hooks/useFetch";
import api from "../../util/api";
import Error from "../../components/UI/helpers/Error";
import Success from "../../components/UI/helpers/Success";

const LoginPasswordReset = () => {
  const [login, setLogin] = React.useState("");
  const [key, setKey] = React.useState("");
  const password = useForm({ type: "password", validation: false });
  const { data, loading, error, request } = useFetch();
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    const { url, options } = api.PASSWORD_RESET({
      login,
      key,
      password: password.value,
    });

    const { response } = await request(url, options);

    if (response.ok) {
      navigate("/login");
    }
  }

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get("key");
    const login = params.get("login");

    if (key) {
      setKey(key);
    }

    if (login) {
      setLogin(login);
    }
  }, []);

  return (
    <section className="container mainContainer animeLeft">
      <Title>Resete a senha</Title>
      {data ? (
        <Success>{data}</Success>
      ) : (
        <form onSubmit={handleSubmit}>
          <InputField
            label="Nova senha"
            name="password"
            {...password}
            required
          />
          {loading ? (
            <Button disabled>Resetando...</Button>
          ) : (
            <Button>Resetar</Button>
          )}
        </form>
      )}
      {error && <Error>{error}</Error>}
    </section>
  );
};

export default LoginPasswordReset;
