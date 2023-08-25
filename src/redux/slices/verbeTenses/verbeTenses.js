import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosInstance";

export const fetchTenseNames = createAsyncThunk(
  "tenseNames/fetchTenseNames",
  async () => {
    try {
      const response = await axiosInstance.get(
        "/grammer/basic-verb-tenses/names"
      );
      return response.data;
    } catch (error) {
      console.log(error);
      throw Error("Failed to fetch words");
    }
  }
);
export const fetchSelectedTense = createAsyncThunk(
  "selectedTense/fetchVerbDetails",
  async (id) => {
    try {
      const response = await axiosInstance.get(
        `/grammer/basic-verb-tenses/${id}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
      throw Error("Failed to fetch verb details");
    }
  }
);
const initialState = {
  selectedTenseCache: {}, // Initialize an empty cache object
  selectedTense: [],
  tenseNames: [],
  isLoading: false,
  error: null,
};

const verbTensesSlice = createSlice({
  name: "verbTenses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(fetchTenseNames.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchTenseNames.fulfilled, (state, action) => {
        state.tenseNames = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchTenseNames.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(fetchSelectedTense.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(fetchSelectedTense.fulfilled, (state, action) => {
        const { _id } = action.payload;
        {
          console.log("in Slice", action.payload);
        }
        {
          console.log("id in Slice", _id);
        }
        state.selectedTenseCache[_id] = action.payload;
        state.selectedTense = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchSelectedTense.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default verbTensesSlice.reducer;
