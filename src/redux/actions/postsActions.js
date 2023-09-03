// Action Creators
import { ADD_POST, DELETE_POST } from "../constants/actionTypes";

export const addPost = (title, content) => ({
  type: ADD_POST,
  payload: {
    title,
    content,
  },
});

export const deletePost = (postId) => ({
  type: DELETE_POST,
  payload: {
    postId,
  },
});
