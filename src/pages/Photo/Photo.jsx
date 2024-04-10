import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhoto } from "@features/photo/reducer";
import Error from "@components/UI/helpers/Error";
import Loading from "@components/UI/helpers/Loading/Loading";
import Head from "@components/Helpers/Head";
import PhotoContent from "@components/Photo/PhotoContent";

const Photo = () => {
  const { id } = useParams();
  const { data, loading, error } = useSelector((state) => state.photo);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchPhoto(id));
  }, [id, dispatch]);

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
