import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhoto } from "../../../../store/photo/reducer";
import styles from "./FeedModal.module.css";
import Error from "../../../../components/UI/helpers/Error";
import Loading from "../../../../components/UI/helpers/Loading/Loading";
import PhotoContent from "../../../../components/Photo/PhotoContent";

const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, loading, error } = useSelector((state) => state.photo);
  const dispatch = useDispatch();

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) {
      setModalPhoto(null);
    }
  }

  React.useEffect(() => {
    dispatch(fetchPhoto(photo.id));
  }, [photo, dispatch]);

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error>{error}</Error>}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
};

export default FeedModal;
