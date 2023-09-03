/* eslint-disable no-case-declarations */
import { ADD_POST, DELETE_POST } from "../constants/actionTypes";

const initialState = {
  posts: [],
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      // Create a new post object and add it to the posts array
      const newPost = {
        id: state.posts.length + 1, // Generate a unique ID (replace with an appropriate method)
        title: action.payload.title,
        content: action.payload.content,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
      };

    case DELETE_POST:
      // Filter out the post to delete based on postId
      const updatedPosts = state.posts.filter(
        (post) => post.id !== action.payload.postId
      );
      return {
        ...state,
        posts: updatedPosts,
      };

    default:
      return state;
  }
};

export default postsReducer;
