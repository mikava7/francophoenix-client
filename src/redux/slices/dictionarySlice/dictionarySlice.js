import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosInstance";

export const fetchWordsByFrench = createAsyncThunk(
  "dictionary/fetchWordsByFrench",
  async (french) => {
    try {
      const response = await axiosInstance.get(`/words/french/${french}`);
      return response.data;
    } catch (error) {
      console.log(error);
      throw Error("Failed to fetch words");
    }
  }
);

const initialState = {
  searchResults: [],
  isLoading: false,
  error: null,
};

const dictionarySlice = createSlice({
  name: "dictionary",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWordsByFrench.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchWordsByFrench.fulfilled, (state, action) => {
        state.searchResults = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchWordsByFrench.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default dictionarySlice.reducer;
