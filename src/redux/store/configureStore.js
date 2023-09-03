import thunk from "redux-thunk";
import postsSlice from "../slice/postsSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    posts: postsSlice,
  },
  middleware: [thunk],
});

export default store;
