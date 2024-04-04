import React from "react";
import styles from "./FeedModal.module.css";
import useFetch from "../../../../hooks/useFetch";
import api from "../../../../util/api";
import Error from "../../../../components/UI/helpers/Error";
import Loading from "../../../../components/UI/helpers/Loading";
import PhotoContent from "../../../../components/Photo/PhotoContent";

const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, error, loading, request } = useFetch();

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) {
      setModalPhoto(null);
    }
  }

  React.useEffect(() => {
    const { url, options } = api.PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error>{error}</Error>}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
};

export default FeedModal;
