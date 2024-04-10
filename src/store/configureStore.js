import { combineReducers, configureStore } from "@reduxjs/toolkit";
import logger from "./middleware/logger";
import photo from "./features/photo/reducer";
import token from "./features/token/reducer";
import user from "./features/user/reducer";

const reducer = combineReducers({
  photo,
  user,
  token,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
