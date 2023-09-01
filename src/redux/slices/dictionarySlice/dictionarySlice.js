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
export const fetchWordsByEnglish = createAsyncThunk(
  "dictionary/fetchWordsByEnglish",
  async (english) => {
    try {
      const response = await axiosInstance.get(`/words/english/${english}`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error("Failed to fetch English words");
    }
  }
);

export const fetchWordsByGeorgian = createAsyncThunk(
  "dictionary/fetchWordsByGeorgian",
  async (georgian) => {
    try {
      const response = await axiosInstance.get(`/words/georgian/${georgian}`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error("Failed to fetch Georgian words");
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
        state.isLoading = false;
      })
      .addCase(fetchWordsByEnglish.fulfilled, (state, action) => {
        state.searchResults = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchWordsByEnglish.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      })
      .addCase(fetchWordsByGeorgian.fulfilled, (state, action) => {
        state.searchResults = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchWordsByGeorgian.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      });
  },
});

export default dictionarySlice.reducer;
