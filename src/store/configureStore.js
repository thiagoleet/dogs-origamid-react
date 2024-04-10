import { combineReducers, configureStore } from "@reduxjs/toolkit";
import photo from "./features/photo/reducer";
import token from "./features/token/reducer";
import user from "./features/user/reducer";
import feed from "./features/feed/reducer";
import ui from "./features/ui/reducer";

const reducer = combineReducers({
  photo,
  user,
  token,
  feed,
  ui,
});

const store = configureStore({
  reducer,
});

export default store;
