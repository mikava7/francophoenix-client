import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosInstance";

export const fetchWordsByLanguage = createAsyncThunk(
  "dictionary/fetchWordsByLanguage",
  async ({ language, query }) => {
    try {
      const response = await axiosInstance.get(`/words/${language}/${query}`);
      return response.data;
    } catch (error) {
      console.error(error);
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
  reducers: {
    clearSearchResults: (state) => {
      state.searchResults = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWordsByLanguage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchWordsByLanguage.fulfilled, (state, action) => {
        state.searchResults = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchWordsByLanguage.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      });
  },
});
export const clearSearchResults = () => ({
  type: "dictionary/clearSearchResults",
});
export default dictionarySlice.reducer;
