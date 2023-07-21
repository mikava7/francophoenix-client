import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../api/axiosInstance";
export const getGrammer = createAsyncThunk(
  "gramer/getGrammer",
  async (lessonNumber) => {
    try {
      const response = await instance.get(
        `/course/elementary/grammer/${lessonNumber}`
      );
      return response.data;
    } catch (error) {
      throw Error("Failed to fetch grammer for lesson");
    }
  }
);
const initialState = {
  grammer: [],
  isLoading: false,
  error: null,
};

const grammerSlice = createSlice({
  name: "grammer",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getGrammer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getGrammer.fulfilled, (state, action) => {
        state.grammer = action.payload;
        state.isLoading = false;
      })
      .addCase(getGrammer.rejected, (state, action) => {
        state.error = action.error.message;
      }),
});
export default grammerSlice.reducer;
