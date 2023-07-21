import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../api/axiosInstance";

export const fetchDialoguesExercises = createAsyncThunk(
  "dialogueExercises/fetchDialoguesExercises",
  async (lessonNumber) => {
    try {
      const response = await instance.get(
        `/course/elementary/exercise-1/${lessonNumber}`
      );
      return response.data;
    } catch (error) {
      throw Error("Failed to fetch dialogues for lesson");
    }
  }
);

const initialState = {
  dialogueExercises: [],
  isLoading: false,
  error: null,
};

const dialogueExerciseSlice = createSlice({
  name: "dialogueExercises",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDialoguesExercises.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchDialoguesExercises.fulfilled, (state, action) => {
        state.dialogueExercises = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchDialoguesExercises.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default dialogueExerciseSlice.reducer;
