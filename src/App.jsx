import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { useDispatch } from "react-redux";

// components
import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";
import ProtectedRoute from "@components/Helpers/ProtectedRoute";
// pages
import Home from "@pages/Home/Home";
import Login from "@pages/Login/Login";
import User from "@pages/User/User";
import Photo from "@pages/Photo/Photo";
import UserProfile from "@pages/User/UserProfile";
import NotFound from "@pages/NotFound";
import { autoLogin } from "./store/features/user/reducer";

const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(autoLogin());
  }, [dispatch]);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main className="AppBody">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/*" element={<Login />} />
            <Route
              path="/conta/*"
              element={
                <ProtectedRoute>
                  <User />
                </ProtectedRoute>
              }
            />
            <Route path="/foto/:id" element={<Photo />} />
            <Route path="/perfil/:user" element={<UserProfile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
