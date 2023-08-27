import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosInstance";

export const fetchGrammer = createAsyncThunk(
  "grammer/fetchGrammer",
  async () => {
    try {
      const response = await axiosInstance.get("/grammer/basic-grammer");
      return response.data;
    } catch (error) {
      throw Error("Failed to fetch grammer lessons");
    }
  }
);

export const fetchByAspect = createAsyncThunk(
  "grammer/fetchByAspect",
  async (aspect, thunkAPI) => {
    try {
      const response = await axiosInstance.get(`/grammar/${aspect}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
const initialState = {
  quizData: [],
  topicsByAspect: {},

  isLoading: false,
  error: null,
};

const grammerSlice = createSlice({
  name: "grammer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGrammer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchGrammer.fulfilled, (state, action) => {
        state.grammer = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchGrammer.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(fetchByAspect.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchByAspect.fulfilled, (state, action) => {
        {
          console.log(action.payload);
        }
        state.topicsByAspect[action.meta.arg] = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchByAspect.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default grammerSlice.reducer;
