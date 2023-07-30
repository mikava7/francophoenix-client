import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../api/axiosInstance";

export const fetchDialogueTopics = createAsyncThunk(
  "dialogueTopics/fetchDialogueTopics",
  async () => {
    try {
      const response = await instance.get("/dialogueTopics");
      return response.data;
    } catch (error) {
      throw Error("Failed to fetch phrases for lesson");
    }
  }
);

const initialState = {
  dialogueTopics: [],
  isLoading: false,
  error: null,
};

const dialogueTopicSlide = createSlice({
  name: "dialogueTopics",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDialogueTopics.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchDialogueTopics.fulfilled, (state, action) => {
        state.dialogueTopics = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchDialogueTopics.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default dialogueTopicSlide.reducer;
