import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosInstance";

export const registerUser = createAsyncThunk(
  "user/register",
  async (userData) => {
    try {
      const response = await axiosInstance.post("/register", userData);
      return response.data;
    } catch (error) {
      throw new Error(
        `Failed to register user:\n ${error.response.data.message}`
      );
    }
  }
);
export const updateUserData = createAction("user/updateUserData");
// Define an action to update user data

export const FetchupdateUser = createAsyncThunk(
  "user/FetchupdateUser",
  async ({ id, newUsername }, { dispatch }) => {
    try {
      const response = await axiosInstance.post("/auth/update-username", {
        id,
        newUsername,
      });
      const updatedUser = response.data;
      dispatch(updateUserData(updatedUser));
      return response.data;
    } catch (error) {
      throw new Error(
        `Failed to update username: ${error.response.data.message}`
      );
    }
  }
);

const initialState = {
  user: "user",

  isSuccess: false,
  isLoading: false,
  error: null,
};
const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUserData: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isSuccess = true;
        state.isLoading = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(FetchupdateUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(FetchupdateUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isSuccess = true;
        state.isLoading = false;
      })
      .addCase(FetchupdateUser.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(updateUserData, (state, action) => {
        state.user = action.payload;
      });
  },
});

export default usersSlice.reducer;
