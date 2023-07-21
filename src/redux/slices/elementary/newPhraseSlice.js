import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../api/axiosInstance";

export const fetchNewPhrases = createAsyncThunk(
  "newPhrases/fetchNewPhrases",
  async (lessonNumber) => {
    try {
      const response = await instance.get(
        `/course/elementary/phrases/${lessonNumber}`
      );
      return response.data;
    } catch (error) {
      throw Error("Failed to fetch phrases for lesson");
    }
  }
);

const initialState = {
  newPhrases: [],
  isLoading: false,
  error: null,
};

const newPhraseSlice = createSlice({
  name: "newPhrases",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNewPhrases.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchNewPhrases.fulfilled, (state, action) => {
        state.newPhrases = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchNewPhrases.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default newPhraseSlice.reducer;
