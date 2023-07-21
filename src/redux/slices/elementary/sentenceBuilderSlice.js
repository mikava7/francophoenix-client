import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../api/axiosInstance";
export const fetchAudioFiles = createAsyncThunk(
  "dialogues/fetchAudioFiles",
  async () => {
    try {
      const response = await instance.get(`/`);
      return response.data;
    } catch (error) {
      throw Error("Failed to fetch audio files");
    }
  }
);
export const fetchSentenceBuilder = createAsyncThunk(
  "sentenceBuilder/fetchSentenceBuilder",
  async (lessonNumber) => {
    try {
      const response = await instance.get(
        `/course/elementary/sentence-builder/${lessonNumber}`
      );
      return response.data;
    } catch (error) {
      throw Error("Failed to fetch dialogues for lesson");
    }
  }
);

const initialState = {
  sentenceBuilder: [],
  audioFiles: [],

  isLoading: false,
  error: null,
};

const sentenceBuilderSlice = createSlice({
  name: "sentenceBuilder",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSentenceBuilder.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchSentenceBuilder.fulfilled, (state, action) => {
        state.sentenceBuilder = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchSentenceBuilder.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(fetchAudioFiles.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAudioFiles.fulfilled, (state, action) => {
        state.audioFiles = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchAudioFiles.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default sentenceBuilderSlice.reducer;
