import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosInstance";

export const fetchBooksPreview = createAsyncThunk(
  "books/fetchBooksPreview",
  async (level) => {
    try {
      const response = await axiosInstance.get(`books`);
      return response.data;
    } catch (error) {
      console.log(error);
      throw Error("Failed to fetch books preview");
    }
  }
);

export const fetchSelectedBook = createAsyncThunk(
  "books/fetchSelectedBook",
  async (id) => {
    try {
      const response = await axiosInstance.get(`books/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
      throw Error("Failed to fetch selected");
    }
  }
);
// export const fetchBooksBylevel
const initialState = {
  books: [],
  selectedBook: [],
  isLoading: false,
  error: null,
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooksPreview.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBooksPreview.fulfilled, (state, action) => {
        state.books = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchBooksPreview.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(fetchSelectedBook.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchSelectedBook.fulfilled, (state, action) => {
        state.selectedBook = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchSelectedBook.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default booksSlice.reducer;
