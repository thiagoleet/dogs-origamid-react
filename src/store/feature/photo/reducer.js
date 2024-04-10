import createAsyncSlice from "../../util/createAsyncSlice";
import api from "../../../util/api";

const slice = createAsyncSlice({
  name: "photo",
  fetchConfig: (id) => {
    return api.PHOTO_GET(id);
  },
});

export const fetchPhoto = slice.asyncAction;
export default slice.reducer;
