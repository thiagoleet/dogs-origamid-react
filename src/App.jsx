import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// context
import { UserStorage } from "./context/UserContext";

// components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
// pages
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import User from "./pages/User/User";
import ProtectedRoute from "./components/Helpers/ProtectedRoute";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <UserStorage>
          <Header />
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
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </>
  );
};

export default App;
