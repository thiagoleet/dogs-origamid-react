import React from "react";
import FeedPhotosItem from "./FeedPhotosItem";
import useFetch from "../../../../hooks/useFetch";
import api from "../../../../util/api";
import Error from "../../../../components/UI/helpers/Error";
import Loading from "../../../../components/UI/helpers/Loading";
import styles from "./FeedPhotos.module.css";

const FeedPhotos = () => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = api.PHOTOS_GETS({ page: 1, total: 6, user: 0 });
      const { response, json } = await request(url, options);
    }

    fetchPhotos();
  }, [request]);

  if (error) {
    return <Error>{error}</Error>;
  }

  if (loading) {
    return <Loading />;
  }

  if (data) {
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map((photo) => (
          <FeedPhotosItem key={photo.id} photo={photo} />
        ))}
      </ul>
    );
  } else return null;
};

export default FeedPhotos;
