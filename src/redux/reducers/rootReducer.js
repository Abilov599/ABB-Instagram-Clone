import { combineReducers } from "redux";
import postReducer from "./postsReducer";

// Combine multiple reducers into one root reducer
const rootReducer = combineReducers({
  posts: postReducer,
  // Add more reducers here if needed
});

export default rootReducer;
