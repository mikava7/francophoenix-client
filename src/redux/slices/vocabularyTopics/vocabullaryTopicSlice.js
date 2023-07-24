import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../api/axiosInstance";

export const fetchVocabullaryTopics = createAsyncThunk(
  "vocabullaryTopics/fetchVocabullaryTopics",
  async () => {
    try {
      const response = await instance.get("/vocabulary-topics");
      return response.data;
    } catch (error) {
      throw Error("Failed to fetch phrases for lesson");
    }
  }
);

const initialState = {
  vocabullaryTopics: [],
  isLoading: false,
  error: null,
};

const vocabullaryTopicsSlice = createSlice({
  name: "vocabullaryTopics",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVocabullaryTopics.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchVocabullaryTopics.fulfilled, (state, action) => {
        state.vocabullaryTopics = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchVocabullaryTopics.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default vocabullaryTopicsSlice.reducer;
