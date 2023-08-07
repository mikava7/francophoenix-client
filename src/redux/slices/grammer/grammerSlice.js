import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosInstance";

export const fetchGrammer = createAsyncThunk(
  "grammer/fetchGrammer",
  async () => {
    try {
      const response = await axiosInstance.get("/grammer/basic-grammer");
      return response.data;
    } catch (error) {
      throw Error("Failed to fetch grammer lessons");
    }
  }
);

const initialState = {
  quizData: [],
  isLoading: false,
  error: null,
};

const grammerSlice = createSlice({
  name: "grammer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGrammer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchGrammer.fulfilled, (state, action) => {
        state.grammer = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchGrammer.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default grammerSlice.reducer;
