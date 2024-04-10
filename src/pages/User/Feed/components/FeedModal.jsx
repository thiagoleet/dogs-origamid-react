import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./FeedModal.module.css";
import Error from "@components/UI/helpers/Error";
import Loading from "@components/UI/helpers/Loading/Loading";
import PhotoContent from "@components/Photo/PhotoContent";
import { closeModal } from "@features/ui/reducer";

const FeedModal = () => {
  const { data, loading, error } = useSelector((state) => state.photo);
  const { modal } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) {
      dispatch(closeModal());
    }
  }

  React.useEffect(() => {
    dispatch(closeModal());
  }, [dispatch]);

  if (!modal) return null;

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error>{error}</Error>}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
};

export default FeedModal;
