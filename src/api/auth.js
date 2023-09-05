import { createAsyncThunk } from "@reduxjs/toolkit";
import userApi from "./";

export const registerUser = createAsyncThunk(
  "auth/register",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await userApi.post("/auth/register", userData);

      if (response.status !== 200) {
        return rejectWithValue(response.data);
      }

      return response.data;
    } catch (error) {
      return rejectWithValue({ error: "Network error" });
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await userApi.post("/auth/login", credentials);

      if (response.status !== 200) {
        return rejectWithValue(response.data);
      }

      return response.data;
    } catch (error) {
      return rejectWithValue({ error: "Network error" });
    }
  }
);
