import createAsyncSlice from "../../util/createAsyncSlice";
import api from "../../../util/api";

const slice = createAsyncSlice({
  name: "token",
  initialState: {
    data: null,
    loading: false,
    error: null,
    logged: false,
  },
  reducers: {
    userLogout(state) {
      state.data = null;
      state.error = null;
      state.loading = false;
      state.logged = false;
    },
  },
  fetchConfig: (user) => {
    return api.TOKEN_POST(user);
  },
});

export const fetchToken = slice.asyncAction;
export default slice.reducer;
