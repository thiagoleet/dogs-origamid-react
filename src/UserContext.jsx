import React from "react";
import api from "./util/api";

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  async function userLogin(username, password) {
    const { url, options } = api.TOKEN_POST({
      username,
      password,
    });

    try {
      setLoading(true);
      const response = await fetch(url, options);
      const { token } = await response.json();
      if (token) {
        window.localStorage.setItem("token", token);
        await getUser(token);
      }
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  async function getUser(token) {
    const { url, options } = api.USER_GET(token);
    const response = await fetch(url, options);
    const data = await response.json();
    setData(data);
  }

  return (
    <UserContext.Provider value={{ userLogin, data, error, loading, login }}>
      {children}
    </UserContext.Provider>
  );
};
