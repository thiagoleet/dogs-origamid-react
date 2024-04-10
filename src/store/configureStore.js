import { combineReducers, configureStore } from "@reduxjs/toolkit";
import photo from "./features/photo/reducer";
import token from "./features/token/reducer";
import user from "./features/user/reducer";
import feed from "./features/feed/reducer";

const reducer = combineReducers({
  photo,
  user,
  token,
  feed,
});

const store = configureStore({
  reducer,
});

export default store;
