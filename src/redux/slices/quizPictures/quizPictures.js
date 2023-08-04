import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosInstance";

export const fetchQuizData = createAsyncThunk(
  "quizData/fetchQuizData",
  async (french) => {
    try {
      const response = await axiosInstance.get("quiz-vocabulary-data");
      return response.data;
    } catch (error) {
      console.log(error);
      throw Error("Failed to fetch words");
    }
  }
);

const initialState = {
  quizData: [],
  isLoading: false,
  error: null,
};

const quizDataSlice = createSlice({
  name: "quizData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuizData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchQuizData.fulfilled, (state, action) => {
        state.quizData = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchQuizData.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default quizDataSlice.reducer;
