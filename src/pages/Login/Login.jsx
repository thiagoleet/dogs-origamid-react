import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import Head from "@components/Helpers/Head";
import NotFound from "@pages/NotFound";
import LoginForm from "./LoginForm";
import LoginCreate from "./LoginCreate";
import LoginPasswordLost from "./LoginPasswordLost";
import LoginPasswordReset from "./LoginPasswordReset";
import styles from "./Login.module.css";
import Loading from "@/components/UI/helpers/Loading/Loading";

const Login = () => {
  const { data, loading } = useSelector((state) => state.user);

  if (loading) {
    return <Loading />;
  }

  if (data) {
    return <Navigate to="/conta" />;
  }

  return (
    <section className={styles.login}>
      <Head title="Login" />
      <div className={styles.forms}>
        <Routes>
          <Route path="" element={<LoginForm />} />
          <Route path="criar" element={<LoginCreate />} />
          <Route path="perdeu" element={<LoginPasswordLost />} />
          <Route path="resetar" element={<LoginPasswordReset />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
