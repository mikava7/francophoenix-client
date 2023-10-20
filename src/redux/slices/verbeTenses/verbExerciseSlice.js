import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/axiosInstance";

export const fetchVerbList = createAsyncThunk(
  "verbExercise/fetchVerbList",
  async () => {
    try {
      const response = await axios.get("/verbs/exercise/verb-list");
      return response.data;
    } catch (error) {
      console.log(error);
      throw Error("Failed to fetch verb list");
    }
  }
);
export const getVerbExercises = createAsyncThunk(
  "verbExercise/getVerbExercises",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/verbs/tenses/${id}`);
      //       console.log("API Response:", response.data); // Log the API response
      return response.data;
    } catch (error) {
      console.error("Error fetching exercises:", error);
      return rejectWithValue("Failed to fetch verb exercises");
    }
  }
);

const initialState = {
  listOfVerb: [],
  verbEecercise: {},
  loading: false,
  error: null,
};

const verbExerciseSlice = createSlice({
  name: "verbExercise",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVerbList.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchVerbList.fulfilled, (state, action) => {
        state.listOfVerb = action.payload;
        state.loading = false;
      })
      .addCase(fetchVerbList.rejected, (state, action) => {
        state.error = action.payload.error;
      })
      .addCase(getVerbExercises.pending, (state) => {
        state.loading = true;
      })
      .addCase(getVerbExercises.fulfilled, (state, action) => {
        state.verbEecercise = action.payload;
        state.loading = false;
      })
      .addCase(getVerbExercises.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default verbExerciseSlice.reducer;
