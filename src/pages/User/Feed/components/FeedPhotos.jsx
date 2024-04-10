import React from "react";
import { useSelector } from "react-redux";
import FeedPhotosItem from "./FeedPhotosItem";
import styles from "./FeedPhotos.module.css";

const FeedPhotos = ({ setModalPhoto }) => {
  const { list } = useSelector((state) => state.feed);

  if (list) {
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {list.map((photo) => (
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
