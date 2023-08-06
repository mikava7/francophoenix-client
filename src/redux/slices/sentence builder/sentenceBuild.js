import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosInstance";

export const fetchSentences = createAsyncThunk(
  "sentences/fetchSentences",
  async () => {
    try {
      const response = await axiosInstance.get("/sentences/general");
      return response.data;
    } catch (error) {
      console.log(error);
      throw Error("Failed to fetch words");
    }
  }
);

const initialState = {
  sentences: [],
  isLoading: false,
  error: null,
};

const sentenceBuildSlice = createSlice({
  name: "sentences",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSentences.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchSentences.fulfilled, (state, action) => {
        state.sentences = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchSentences.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default sentenceBuildSlice.reducer;
