import React from "react";
import { useNavigate } from "react-router-dom";
import api from "./util/api";

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const navigate = useNavigate();
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const userLogout = React.useCallback(
    async function () {
      window.localStorage.removeItem("token");
      setData(null);
      setError(null);
      setLoading(false);
      setLogin(false);
      navigate("/login");
    },
    [navigate]
  );

  async function userLogin(username, password) {
    const { url, options } = api.TOKEN_POST({
      username,
      password,
    });

    try {
      setError(null);
      setLoading(true);

      const response = await fetch(url, options);
      if (!response.ok) {
        const { message } = await response.json();
        throw new Error(`Error: ${message}`);
      }
      const { token } = await response.json();
      window.localStorage.setItem("token", token);
      await getUser(token);
      navigate("/conta");
    } catch (err) {
      setError(err.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  async function getUser(token) {
    const { url, options } = api.USER_GET(token);
    const response = await fetch(url, options);
    const data = await response.json();
    setData(data);
    setLogin(true);
  }

  React.useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem("token");
      if (token) {
        try {
          setError(null);
          setLoading(true);
          const { url, options } = api.TOKEN_VALIDADE_POST(token);
          const response = await fetch(url, options);
          if (!response.ok) {
            throw new Error("Token inválido");
          }
          await getUser(token);
        } catch (err) {
          userLogout();
        } finally {
          setLoading(false);
        }
      }
    }
    autoLogin();
  }, [userLogout]);

  return (
    <UserContext.Provider
      value={{ userLogin, userLogout, data, error, loading, login }}
    >
      {children}
    </UserContext.Provider>
  );
};
