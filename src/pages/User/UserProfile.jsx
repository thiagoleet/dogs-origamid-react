import React from "react";
import { useParams } from "react-router-dom";
import Feed from "./Feed/Feed";
import Title from "../../components/UI/helpers/Title";

const UserProfile = () => {
  const { user } = useParams();

  return (
    <section className="container mainUser">
      <Title>{user}</Title>
      <Feed user={user} />
    </section>
  );
};

export default UserProfile;
