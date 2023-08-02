import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosInstance";

export const fetchDictionary = createAsyncThunk(
  "allWordsFromDictionary/fetchDictionary",
  async () => {
    try {
      const response = await axiosInstance.get("/words");
      return response.data;
    } catch (error) {
      console.log(error);
      throw Error("Failed to fetch dictionay");
    }
  }
);

const initialState = {
  dictionary: [],
  isLoading: false,
  error: null,
};

const allWordsFromDictionarySlice = createSlice({
  name: "allWordsFromDictionary",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDictionary.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchDictionary.fulfilled, (state, action) => {
        state.dictionary = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchDictionary.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default allWordsFromDictionarySlice.reducer;
