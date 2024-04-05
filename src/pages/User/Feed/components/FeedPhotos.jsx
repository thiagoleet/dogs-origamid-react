import React from "react";
import FeedPhotosItem from "./FeedPhotosItem";
import useFetch from "../../../../hooks/useFetch";
import api from "../../../../util/api";
import Error from "../../../../components/UI/helpers/Error";
import Loading from "../../../../components/UI/helpers/Loading/Loading";
import styles from "./FeedPhotos.module.css";

const TOTAL_PER_PAGE = 6;

const FeedPhotos = ({ user, page, setModalPhoto, setInfinte }) => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = api.PHOTOS_GETS({
        page,
        total: TOTAL_PER_PAGE,
        user,
      });
      const { response, json } = await request(url, options);
      if (response && response.ok && json.length < TOTAL_PER_PAGE) {
        setInfinte(false);
      }
    }

    fetchPhotos();
  }, [request, user, page, setInfinte]);

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
          <FeedPhotosItem
            setModalPhoto={setModalPhoto}
            key={photo.id}
            photo={photo}
          />
        ))}
      </ul>
    );
  } else return null;
};

export default FeedPhotos;
