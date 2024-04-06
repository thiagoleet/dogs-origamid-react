import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import api from "../../util/api";
import Error from "../../components/UI/helpers/Error";
import Loading from "../../components/UI/helpers/Loading/Loading";
import Head from "../../components/Helpers/Head";
import PhotoContent from "../../components/Photo/PhotoContent";

const Photo = () => {
  const { id } = useParams();
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = api.PHOTO_GET(id);
    request(url, options);
  }, [id, request]);

  if (error) {
    return <Error>{error}</Error>;
  }
  if (loading) {
    return <Loading />;
  }
  if (data) {
    return (
      <section className="container mainContainer">
        <Head title={data.photo.title} />
        <PhotoContent data={data} single />
      </section>
    );
  } else {
    return null;
  }
};

export default Photo;
