import React from "react";
import Feed from "../User/Feed/Feed";
import Head from "../../components/Helpers/Head";

const Home = () => {
  return (
    <section className="container mainContainer">
      <Head title="Fotos" />
      <Feed />
    </section>
  );
};

export default Home;
