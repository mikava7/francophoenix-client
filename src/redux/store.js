import { configureStore } from "@reduxjs/toolkit";

import dialogueReducer from "./slices/elementary/dialogueSlice";
import dialogueExerciseReducer from "./slices/elementary/dialogueExerciseSlice";
import sentenceBuilderReducer from "./slices/elementary/sentenceBuilderSlice";
import newPhraseReducer from "./slices/elementary/newPhraseSlice";
// const persistedReducer = persistReducer(persistConfig, authReducer);
import grammerSliceReducer from "./slices/elementary/grammerSlice";
import booksReducer from "./slices/books/booksSlice";
import vocabularyTopicsReducer from "./slices/vocabularyTopics/vocabularyTopicSlice";
import dialogueTopicSlideReducer from "./slices/dialogueTopics/dialogueTopicSlide";
import dictionaryReducer from "./slices/dictionarySlice/dictionarySlice";

const store = configureStore({
  reducer: {
    dialogues: dialogueReducer,
    dialogueExercises: dialogueExerciseReducer,
    sentenceBuilder: sentenceBuilderReducer,
    newPhrases: newPhraseReducer,
    grammer: grammerSliceReducer,
    vocabularyTopics: vocabularyTopicsReducer,

    books: booksReducer,

    dialogueTopics: dialogueTopicSlideReducer,
    dictionary: dictionaryReducer,
  },
});
//
export default store;
