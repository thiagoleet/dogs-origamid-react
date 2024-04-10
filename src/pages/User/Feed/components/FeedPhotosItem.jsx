import React from "react";
import { useDispatch } from "react-redux";
import styles from "./FeedPhotosItem.module.css";
import Image from "@components/UI/helpers/Image/Image";
import { openModal } from "@features/ui/reducer";
import { fetchPhoto } from "@/store/features/photo/reducer";

const FeedPhotosItem = ({ photo }) => {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(openModal());
    dispatch(fetchPhoto(photo.id));
  }

  return (
    <li className={styles.photo} onClick={handleClick}>
      <Image src={photo.src} alt={photo.title} />
      <span className={styles.visualizacao}>{photo.acessos}</span>
    </li>
  );
};

export default FeedPhotosItem;
