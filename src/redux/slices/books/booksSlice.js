import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosInstance";

export const fetchBooksByLevel = createAsyncThunk(
  "books/fetchBooksByLevel",
  async (level) => {
    try {
      const response = await axiosInstance.get(`books?level=${level}`);
      return response.data;
    } catch (error) {
      console.log(error);
      throw Error("Failed to fetch books by level");
    }
  }
);

const initialState = {
  books: [],
  isLoading: false,
  error: null,
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooksByLevel.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBooksByLevel.fulfilled, (state, action) => {
        state.books = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchBooksByLevel.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default booksSlice.reducer;
