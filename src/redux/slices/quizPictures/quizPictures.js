import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosInstance";

export const fetchQuizData = createAsyncThunk(
  "currentTopic/fetchQuizData",
  async (id) => {
    try {
      const response = await axiosInstance.get(`/quiz-topic/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
      throw Error("Failed to fetch words");
    }
  }
);

export const fetchTopicNames = createAsyncThunk(
  "quizData/fetchTopicNames",
  async () => {
    try {
      const response = await axiosInstance.get("/quiz-topic-names");
      return response.data;
    } catch (error) {
      console.log(error);
      throw Error("Failed to fetch words");
    }
  }
);
const initialState = {
  currentTopic: [],
  topicNames: [],
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
        state.currentTopic = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchQuizData.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(fetchTopicNames.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchTopicNames.fulfilled, (state, action) => {
        state.topicNames = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchTopicNames.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default quizDataSlice.reducer;
