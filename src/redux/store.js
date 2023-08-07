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
import allWordsFromDictionaryReducer from "./slices/dictionarySlice/allWordsFromDictionarySlice";
import isFavoriteReducer from "./slices/favorites/addToFavorite";
import quizDataReducer from "./slices/quizPictures/quizPictures";
import presentTenseReducer from "./slices/verbeTenses/presentTenseSlice";
import sentencesReducer from "./slices/sentence builder/sentenceBuild";
import grammerReducer from "./slices/grammer/grammerSlice";
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

    allWordsFromDictionary: allWordsFromDictionaryReducer,
    isFavorite: isFavoriteReducer,
    quizData: quizDataReducer,
    presentTense: presentTenseReducer,
    sentences: sentencesReducer,
    grammer: grammerReducer,
  },
});
//
export default store;
