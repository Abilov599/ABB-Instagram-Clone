import { createSlice, createAsyncThunk, createAction} from "@reduxjs/toolkit";
import { getUserFeed } from "../../api/user";

export const subscribeToUser = createAction("userFeed/subscribeToUser");
export const unsubscribeFromUser = createAction("userFeed/unsubscribeFromUser");
// Create an async thunk for fetching posts data
export const fetchUserFeedData = createAsyncThunk(
  "fetchUserFeedData",
  getUserFeed
);

const userFeedSlice = createSlice({
  name: "userFeed",
  initialState: {
    data: [],
    loading: false,
    error: null,
    isSubscribed: false,
    followers: 100,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserFeedData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserFeedData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUserFeedData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(subscribeToUser, (state) => {
        state.isSubscribed = true;
        state.followers += 1;
      })
      .addCase(unsubscribeFromUser, (state) => {
        state.isSubscribed = false;
        state.followers -= 1;
      });
  },
});
export default userFeedSlice.reducer;
