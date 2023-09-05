import thunk from "redux-thunk";
import userFeedSlice from "../slice/userFeedSlice";
import { configureStore } from "@reduxjs/toolkit";
import tokenSlice from "../slice/tokenSlice";

const store = configureStore({
  reducer: {
    userFeed: userFeedSlice,
    token: tokenSlice,
  },
  middleware: [thunk],
});

export default store;
