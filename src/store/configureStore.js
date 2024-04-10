import { combineReducers, configureStore } from "@reduxjs/toolkit";
import logger from "./middleware/logger";
import photo from "./photo/reducer";
const reducer = combineReducers({
  photo,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
