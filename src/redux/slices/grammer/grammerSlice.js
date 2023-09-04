import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosInstance";
const loadFromLocalStorage = () => {
  const data = localStorage.getItem("grammerData");
  return data ? JSON.parse(data) : null;
};
export const fetchGrammer = createAsyncThunk(
  "grammer/fetchGrammer",
  async () => {
    try {
      const response = await axiosInstance.get("/grammer/basic-grammer");
      const data = response.data;

      // Save data to local storage
      localStorage.setItem("grammerData", JSON.stringify(data));

      return data;
    } catch (error) {
      throw Error("Failed to fetch grammer lessons");
    }
  }
);

export const fetchByAspect = createAsyncThunk(
  "grammer/fetchByAspect",
  async (aspect) => {
    try {
      const response = await axiosInstance.get(`/grammar/${aspect}`);
      return response.data;
    } catch (error) {
      // return thunkAPI.rejectWithValue(error.response.data);
      throw Error("Failed to fetch grammer lessons");
    }
  }
);

export const fetchAspectList = createAsyncThunk(
  "grammer/fetchAspectList",
  async () => {
    try {
      const response = await axiosInstance.get("/grammar/all-aspect");
      return response.data;
    } catch (error) {
      throw Error("Failed to fetch grammer lessons");
    }
  }
);

const initialState = {
  quizData: [],
  topicsByAspect: {},
  aspectList: [],

  isLoading: false,
  error: null,
  grammer: loadFromLocalStorage() || [], // Load data from local storage
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
        // {
        //   console.log(action.payload);
        // }
        state.topicsByAspect[action.meta.arg] = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchByAspect.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(fetchAspectList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAspectList.fulfilled, (state, action) => {
        state.aspectList = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchAspectList.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default grammerSlice.reducer;
