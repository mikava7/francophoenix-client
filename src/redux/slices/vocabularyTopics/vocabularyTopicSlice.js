import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../api/axiosInstance";

export const fetchVocabularyTopics = createAsyncThunk(
  "vocabularyTopics/fetchVocabularyTopics",
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
  vocabularyTopics: [],
  isLoading: false,
  error: null,
};

const vocabularyTopicsSlice = createSlice({
  name: "vocabularyTopics",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVocabularyTopics.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchVocabularyTopics.fulfilled, (state, action) => {
        state.vocabularyTopics = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchVocabularyTopics.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default vocabularyTopicsSlice.reducer;
