// configureStore.js
import { createStore, applyMiddleware, compose } from "redux"; // Import compose
import rootReducer from "../reducers/postsReducer.js";
import thunk from "redux-thunk";

// Add Redux DevTools extension if it's available, or use compose from Redux
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [thunk];

const configureStore = () => {
  return createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware))
  );
};

export default configureStore;
