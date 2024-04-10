import createAsyncSlide from "../../util/createAsyncSlice";
import api from "@util/api";
import { fetchToken } from "../token/reducer";

const slice = createAsyncSlide({
  name: "user",
  fetchConfig: (token) => {
    return api.USER_GET(token);
  },
});

export const fetchUser = slice.asyncAction;

export const userLogin = (user) => async (dispatch) => {
  const { payload } = await dispatch(fetchToken(user));
  if (payload.token) {
    await dispatch(fetchUser(payload.token));
  }
};

export default slice.reducer;
