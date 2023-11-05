import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosInstance";

export const fetchPresentTense = createAsyncThunk(
  "presentTense/fetchPresentTense",
  async () => {
    try {
      const response = await axiosInstance.get("/verbs/tenses/present");
      // console.log("response.data in fetchPresentTense", response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      throw Error("Failed to fetch words");
    }
  }
);
export const submitTensePercentage = createAsyncThunk(
  "presentTense/submitTensePercentage",
  async ({ userId, verb, tense, exerciseType, tensePercentage }) => {
    // console.log("tensePercentage in slice", tensePercentage);
    // console.log("verb in slice", verb);
    // console.log("tense in slice", tense);
    // console.log("userId in slice", userId);
    // console.log("exerciseType in slice", exerciseType);

    try {
      if (userId) {
        const response = await axiosInstance.post("/verbs/progress", {
          userId,
          verb,
          tense,
          exerciseType,
          percentage: tensePercentage,
        });

        // console.log("Tense percentage submitted successfully", response.data);
        return response.data;
      } else {
        console.error("User is not logged in. Tense percentage not submitted.");
        throw new Error("User is not logged in.");
      }
    } catch (error) {
      console.error("Error submitting tense percentage", error);
      throw error;
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
