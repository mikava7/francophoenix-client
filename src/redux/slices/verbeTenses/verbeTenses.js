import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosInstance";

export const fetchTenses = createAsyncThunk("tenses/fetchTenses", async () => {
  try {
    const response = await axiosInstance.get("/grammer/basic-verb-tenses");
    return response.data;
  } catch (error) {
    console.log(error);
    throw Error("Failed to fetch words");
  }
});
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

export const getAllVerbs = createAsyncThunk(
  "verbTenses/getAllVerbs",
  async () => {
    try {
      const response = await axiosInstance.get("/verbs");
      // console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      throw Error("Failed to fetch verb list");
    }
  }
);
const initialState = {
  selectedTenseCache: {}, // Initialize an empty cache object
  selectedTense: [],
  tenses: [],
  verbs: [],
  isLoading: false,
  error: null,
};

const verbTensesSlice = createSlice({
  name: "verbTenses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(fetchTenses.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchTenses.fulfilled, (state, action) => {
        state.tenses = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchTenses.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(fetchSelectedTense.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(fetchSelectedTense.fulfilled, (state, action) => {
        const { _id } = action.payload;
        // {
        //   console.log("in Slice", action.payload);
        // }
        // {
        //   console.log("id in Slice", _id);
        // }
        state.selectedTenseCache[_id] = action.payload;
        state.selectedTense = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchSelectedTense.rejected, (state, action) => {
        state.error = action.error.message;
      })

      .addCase(getAllVerbs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllVerbs.fulfilled, (state, action) => {
        state.verbs = action.payload;
        state.isLoading = false;
      })
      .addCase(getAllVerbs.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default verbTensesSlice.reducer;
