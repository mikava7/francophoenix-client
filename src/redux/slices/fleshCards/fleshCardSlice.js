import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  flashcards: JSON.parse(localStorage.getItem("flashcards")) || [],
  isLoading: false,
  error: null,
};

const flashcardsSlice = createSlice({
  name: "flashcards",
  initialState,
  reducers: {
    addToFlashcard: (state, action) => {
      const newFlashcard = action.payload;
      const isCardInFlashcards = state.flashcards.some(
        (flashcard) => flashcard.word === newFlashcard.word
      );
      if (!isCardInFlashcards) {
        state.flashcards.push(newFlashcard);
        localStorage.setItem("flashcards", JSON.stringify(state.flashcards));
      }
    },
    removeFromFlashcards: (state, action) => {
      const wordToRemove = action.payload;
      state.flashcards.splice(wordToRemove, 1);
      localStorage.setItem("flashcards", JSON.stringify(state.flashcards));
    },
    clearFlashcards: (state, action) => {
      state.flashcards = [];
      localStorage.setItem("flashcards", JSON.stringify(state.flashcards));
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});
export const {
  addToFlashcard,
  removeFromFlashcards,
  clearFlashcards,
  setLoading,
  setError,
} = flashcardsSlice.actions;
export default flashcardsSlice.reducer;
