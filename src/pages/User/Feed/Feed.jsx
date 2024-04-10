import React from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { loadNewPhotos, resetFeedState } from "@features/feed/reducer";

import FeedModal from "./components/FeedModal";
import FeedPhotos from "./components/FeedPhotos";
import Loading from "@/components/UI/helpers/Loading/Loading";
import Error from "@/components/UI/helpers/Error";

const Feed = ({ user }) => {
  const dispatch = useDispatch();
  const { infinite, loading, list, error } = useSelector((state) => state.feed);

  React.useEffect(() => {
    dispatch(resetFeedState());
    dispatch(loadNewPhotos({ user, total: 6 }));
  }, [dispatch, user]);

  React.useEffect(() => {
    let wait = false;

    function infiniteScroll(event) {
      if (infinite) {
        const scroll = window.scrollY;
        const height = document.body.offsetHeight - window.innerHeight;

        if (scroll > height * 0.75 && !wait) {
          wait = true;
          dispatch(loadNewPhotos({ user, total: 6 }));
          setTimeout(() => {
            wait = false;
          }, 500);
        }
      }
    }

    window.addEventListener("wheel", infiniteScroll);
    window.addEventListener("scroll", infiniteScroll);

    return () => {
      window.removeEventListener("wheel", infiniteScroll);
      window.removeEventListener("scroll", infiniteScroll);
    };
  }, [infinite, dispatch, user]);

  return (
    <div>
      <FeedModal />

      {list.length > 0 && <FeedPhotos />}
      {loading && <Loading />}
      {error && <Error>{error}</Error>}
    </div>
  );
};

Feed.defaultProps = {
  user: 0,
};

Feed.prototypes = {
  user: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
};

export default Feed;
