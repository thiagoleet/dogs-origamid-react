import React from "react";
import { Route, Routes } from "react-router-dom";
// components
import UserHeader from "./components/UserHeader";
// subpages
import Feed from "./Feed";
import UserPhotoPost from "./UserPhotoPost";
import UserStats from "./UserStats";

const User = () => {
  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="" element={<Feed />} />
        <Route path="posta" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStats />} />
      </Routes>
    </section>
  );
};

export default User;
