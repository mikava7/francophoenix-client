import { configureStore } from "@reduxjs/toolkit";

import dialogueReducer from "./slices/elementary/dialogueSlice";
import dialogueExerciseReducer from "./slices/elementary/dialogueExerciseSlice";
import sentenceBuilderReducer from "./slices/elementary/sentenceBuilderSlice";
import newPhraseReducer from "./slices/elementary/newPhraseSlice";
// const persistedReducer = persistReducer(persistConfig, authReducer);
import grammerSliceReducer from "./slices/elementary/grammerSlice";
import booksReducer from "./slices/books/booksSlice";
import vocabullaryTopicsReducer from "./slices/vocabularyTopics/vocabullaryTopicSlice";
const store = configureStore({
  reducer: {
    dialogues: dialogueReducer,
    dialogueExercises: dialogueExerciseReducer,
    sentenceBuilder: sentenceBuilderReducer,
    newPhrases: newPhraseReducer,
    grammer: grammerSliceReducer,
    vocabullaryTopics: vocabullaryTopicsReducer,

    books: booksReducer,
  },
});
//
export default store;
