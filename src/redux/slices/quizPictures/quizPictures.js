import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosInstance";

export const fetchQuizData = createAsyncThunk(
  "quizData/fetchQuizData",
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
export const fetchVerbDetails = createAsyncThunk(
  "selectedVerbDetails/fetchVerbDetails",
  async (verb) => {
    // console.log("tooltipContent in slice", verb);
    try {
      const response = await axiosInstance.get(`/get-verb-details/${verb}`);
      return response.data;
    } catch (error) {
      console.log(error);
      throw Error("Failed to fetch verb details");
    }
  }
);
const initialState = {
  selectedVerbDetails: [],
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
      })
      .addCase(fetchVerbDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchVerbDetails.fulfilled, (state, action) => {
        state.selectedVerbDetails = action.payload;
        state.isLoading = false;
        // {
        //   console.log("in slice", action.payload);
        // }
      })
      .addCase(fetchVerbDetails.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default quizDataSlice.reducer;
