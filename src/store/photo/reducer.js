import createAsyncSlice from "../util/createAsyncSlice";
import api from "../../util/api";

const photo = createAsyncSlice({
  name: "photo",
  fetchConfig: (id) => {
    return api.PHOTO_GET(id);
  },
});

const { fetchStarted, fetchSuccess, fetchError } = photo.actions;

export const fetchPhoto = (id) => async (dispatch) => {
  try {
    dispatch(fetchStarted());
    const { url, options } = api.PHOTO_GET(id);
    const response = await fetch(url, options);
    const data = await response.json();
    if (response.ok === false) throw new Error(data.message);
    dispatch(fetchSuccess(data));
  } catch (error) {
    dispatch(fetchError(error.message));
  }
};

export default photo.reducer;
