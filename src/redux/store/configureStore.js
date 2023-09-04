import thunk from "redux-thunk";
import userFeedSlice from "../slice/userFeedSlice";
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../slice/userSlice";

const store = configureStore({
  reducer: {
    userFeed: userFeedSlice,
    user: userSlice,
  },
  middleware: [thunk],
});

export default store;
