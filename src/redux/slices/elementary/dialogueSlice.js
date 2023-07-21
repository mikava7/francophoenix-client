import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../api/axiosInstance";
export const fetchAudioFiles = createAsyncThunk(
  "dialogues/fetchAudioFiles",
  async () => {
    try {
      const response = await instance.get(`/audio`);
      return response.data;
    } catch (error) {
      throw Error("Failed to fetch audio files");
    }
  }
);

export const fetchDialoguesForLesson = createAsyncThunk(
  "dialogues/fetchDialoguesForLesson",
  async (lessonNumber) => {
    try {
      const response = await instance.get(
        `/course/elementary/dialogues/${lessonNumber}`
      );
      return response.data;
    } catch (error) {
      throw Error("Failed to fetch dialogues for lesson");
    }
  }
);

const initialState = {
  dialogues: [],
  //   audioFiles: [],
  isLoading: false,
  error: null,
};

const dialogueSlice = createSlice({
  name: "dialogues",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDialoguesForLesson.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchDialoguesForLesson.fulfilled, (state, action) => {
        state.dialogues = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchDialoguesForLesson.rejected, (state, action) => {
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

export default dialogueSlice.reducer;
