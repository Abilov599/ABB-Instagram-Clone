import { createSlice } from "@reduxjs/toolkit";
import {registerUser,loginUser} from "../../api/auth"


const initialState = {
  user: null,
  token: null,
  status: "idle",
  error: null,
  signupSuccess: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setSignupSuccess: (state, action) => {
      state.signupSuccess = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
        state.token = action.payload.token;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
        state.token = action.payload.token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;
export { registerUser, loginUser};
export const { setSignupSuccess } = userSlice.actions;