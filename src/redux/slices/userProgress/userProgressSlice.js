// userProgressSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/axiosInstance";
// Define an initial state
const initialState = {
  userProgressData: null,
  status: false, // Initially false
  error: null,
};

// Create an async thunk for fetching user progress
export const fetchUserProgress = createAsyncThunk(
  "userProgress/fetchUserProgress",
  async (userId) => {
    //     console.log("userId in slice", userId);
    try {
      // Fetch user progress data from your API here
      const response = await axios.get(`/verbs/${userId}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const trackDownload = createAsyncThunk(
  "userProgress/trackDownload",
  async ({ userId, contentId, section }) => {
    // console.log("in slice", { userId, contentId, section });

    try {
      const response = await axios.post("/auth/progress/downloads", {
        userId,
        contentId,
        section,
      });
      // console.log("submitted successfully", response.data);
      return response.data;
    } catch (error) {
      console.error("Error submitting tense percentage", error);
      throw error;
    }
  }
);

const userProgressSlice = createSlice({
  name: "userProgress",
  initialState,
  reducers: {
    // Add other reducers if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProgress.pending, (state) => {
        state.status = false; // Loading is not complete yet
      })
      .addCase(fetchUserProgress.fulfilled, (state, action) => {
        state.status = true; // Loading is completed
        state.userProgressData = action.payload;
      })
      .addCase(fetchUserProgress.rejected, (state, action) => {
        state.status = false; // Loading failed
        state.error = action.payload;
      });
  },
});

// Export the reducer
export default userProgressSlice.reducer;
