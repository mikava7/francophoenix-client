import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosInstance";

export const fetchPresentTense = createAsyncThunk(
  "presentTense/fetchPresentTense",
  async () => {
    try {
      const response = await axiosInstance.get("/verbs/tenses/present");
      return response.data;
    } catch (error) {
      console.log(error);
      throw Error("Failed to fetch words");
    }
  }
);

const initialState = {
  presentTense: [],
  isLoading: false,
  error: null,
};

const presentTenseSlice = createSlice({
  name: "presentTense",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPresentTense.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPresentTense.fulfilled, (state, action) => {
        state.presentTense = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchPresentTense.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default presentTenseSlice.reducer;
