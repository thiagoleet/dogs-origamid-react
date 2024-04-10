import React from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
// components
import UserHeader from "./components/UserHeader";
// subpages
import Feed from "./Feed/Feed";
import UserPhotoPost from "./UserPhotoPost";
import UserStats from "./UserStats";
// pages
import NotFound from "@pages/NotFound";

const User = () => {
  const { data } = useSelector((state) => state.user);

  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="" element={<Feed user={data.id} />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
};

export default User;
