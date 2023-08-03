// isFavoriteSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: JSON.parse(localStorage.getItem("favorites")) || [],
  isLoading: false,
  error: null,
};

const isFavoriteSlice = createSlice({
  name: "isFavorite",
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      const wordToAdd = action.payload;
      const isWordInFavorites = state.favorites.some(
        (favorite) => favorite.word === wordToAdd.word
      );

      if (!isWordInFavorites) {
        state.favorites.push(wordToAdd);
        localStorage.setItem("favorites", JSON.stringify(state.favorites));
      }
    },
    removeFromFavorites: (state, action) => {
      const indexToRemove = action.payload;
      state.favorites.splice(indexToRemove, 1);
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },

    clearFavorites: (state) => {
      state.favorites = [];
      localStorage.setItem("favorites", JSON.stringify(state.favorites)); // Update local storage when cleared
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
  addToFavorites,
  removeFromFavorites,
  clearFavorites,
  setLoading,
  setError,
} = isFavoriteSlice.actions;
export default isFavoriteSlice.reducer;
