import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import { getUserFeed } from "../../api/user";


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
      });
  },
});
export default userFeedSlice.reducer;
