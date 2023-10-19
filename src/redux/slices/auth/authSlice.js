import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosInstance";
import Cookies from "js-cookie"; // Import the cookie library (e.g., js-cookie)
const checkAuthStatus = () => {
  const token = Cookies.get("authToken"); // Get the authentication token from a cookie

  return {
    isLoading: false,
    error: null,
    user: null,
    isAuthenticated: !!token, // Check if the token exists
  };
};

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData) => {
    try {
      const response = await axiosInstance.post("/auth/login", userData);
      // console.log("response data in login slice", response.data);
      const { accessToken } = response.data;
      Cookies.set("authToken", accessToken);

      return response.data;
    } catch (error) {
      throw new Error(
        `Failed to register user:\n ${error.response.data.message}`
      );
    }
  }
);

export const logoutUser = createAsyncThunk("auth/logoutUser", async (id) => {
  try {
    // Make a request to your backend logout endpoint
    // console.log("userId in slice", id);
    await axiosInstance.post("/auth/logout", { id });
    Cookies.remove("authToken");

    // Clear the JWT token or user-related data from the client-side, if needed

    return; // No need to return any data upon successful logout
  } catch (error) {
    throw error; // Let the error propagate to be handled by rejected action
  }
});
const initialState = checkAuthStatus();
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.auth = action.payload;
        state.isLoading = false;

        state.isAuthenticated = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(logoutUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.auth = null; // Clear the user data
        state.isAuthenticated = false; // Set isAuthenticated to false upon successful logout
        state.isLoading = false;
        state.error = null; // Clear any previous error
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message; // Update the error message
      });
  },
});

export default authSlice.reducer;
