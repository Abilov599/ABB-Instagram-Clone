// postsSlice.js
import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Create an async thunk for fetching posts data
export const fetchPostsData = createAsyncThunk("fetchPostsData", async () => {
  const response = await axios("https://jsonplaceholder.typicode.com/posts");
  return response.data;
});

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostsData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPostsData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchPostsData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default postsSlice.reducer;
