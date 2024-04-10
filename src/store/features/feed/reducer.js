import createAsyncSlice from "@/store/util/createAsyncSlice";
import api from "@/util/api";

const slice = createAsyncSlice({
  name: "feed",
  initialState: {
    list: [],
    pages: 1,
    infinite: true,
  },
  reducers: {
    addPhotos(state, action) {
      state.list.push(...action.payload);
      if (action.payload.lengh === 0) {
        state.infinite = false;
      }
      state.pages++;
    },
    addPage(state) {
      state.pages++;
    },
    resetState(state) {
      state.list = [];
      state.pages = 1;
      state.infinite = true;
      state.loading = false;
      state.error = null;
      state.data = null;
    },
  },
  fetchConfig: ({ page, total, user }) =>
    api.PHOTOS_GETS({ page, total, user }),
});

export const fetchFeed = slice.asyncAction;
export const { addPhotos, addPage, resetState: resetFeedState } = slice.actions;

export const loadNewPhotos =
  ({ total = 6, user }) =>
  async (dispatch, getState) => {
    const { feed } = getState();
    dispatch(addPage());
    const { payload } = await dispatch(
      fetchFeed({ page: feed.pages, total, user })
    );
    dispatch(addPhotos(payload));
  };

export default slice.reducer;
