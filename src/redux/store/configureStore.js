import thunk from "redux-thunk";
import userFeedSlice from "../slice/userFeedSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    userFeed: userFeedSlice,
  },
  middleware: [thunk],
});

export default store;
