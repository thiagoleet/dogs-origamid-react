import { combineReducers, configureStore } from "@reduxjs/toolkit";
import logger from "./middleware/logger";
import slice from "./feature/photo/reducer";
const reducer = combineReducers({
  photo: slice,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
