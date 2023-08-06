import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./Styles/theme";
import styled from "styled-components";
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import JaimeEtClaire from "./elementary/JaimeEtClaire";
import IntermediatePage from "./Intermediate/IntermediatePage";
import AdvancedPage from "./advanced/AdvancedPage";
import Books from "./components/books/Books";
import Courses from "./courses/Courses";
import { GlobalStyle } from "./Styles/globalStyles";
import Navbar from "./components/navbar/Navbar";
import A2B1Books from "./components/books/A2_B1-Books/A2B1Books";
import A1A2Books from "./components/books/A1-A2-Books/A1A2Books";
import B1B2Books from "./components/books/B1_B2-Books/B1B2Books";
import BookDetails from "./components/books/bookDisplay/BookDetails";
import BookPage from "./components/books/Book";
import Vocabularies from "./components/vocabulary/Vocabularies";
import Vocabulary from "./components/vocabulary/vocabularyTopics/Vocabulary";
import ExerciseArticle from "./components/vocabulary/vocabularyTopics/ExerciseArticle";
import VocabularyQuiz from "./components/vocabulary/vocabularyTopics/VocabularyQuiz";
import Loading from "./components/loading/Loading";
import A1Dialogues from "./components/dialogues/A1Dialogues";
import DialoguePage from "./components/dialogues/dialogueTopics/DialoguePage/DialoguePage";
import FindTranslationForFrenchWord from "./pages/SearchComponent/frenchWords/FindTranslationForFrenchWord";
import LegumesTTS from "./components/test/LegumesTTS";
import FavoriteWords from "./components/favoriteList/FavoriteWords";
import QuizPictures from "./components/quizPictures/QuizPictures";
import PresentTense from "./components/verbs/presentTense/PresentTense";
import SentenceBuilderEx from "./components/sentenceBuilder/SentenceBuilderEx";
function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <AppContainer>
        <GlobalStyle />
        <Navbar toggleTheme={toggleTheme} theme={theme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/dictionary"
            element={<FindTranslationForFrenchWord />}
          />
          <Route path="/courses" element={<Courses />} />
          <Route path="/beginner" element={<JaimeEtClaire />} />
          <Route path="/intermediate" element={<IntermediatePage />} />
          <Route path="/advanced" element={<AdvancedPage />} />
          <Route path="/books" element={<A2B1Books />} />
          <Route path="/books/:bookId" element={<BookPage />} />
          <Route path="/book-display" element={<BookDetails />} />
          <Route path="/books/level/a1-a2" element={<A1A2Books />} />
          <Route path="/books/level/a2-b1" element={<A2B1Books />} />
          <Route path="/books/level/b1-b2" element={<B1B2Books />} />
          <Route path="/vocabulary-topics" element={<Vocabularies />} />
          <Route
            path="/vocabulary-topics/:vocabularyTopicId"
            element={<Vocabulary />}
          />
          <Route
            path="/vocabulary-topics/exercise-article"
            element={<ExerciseArticle />}
          />
          <Route
            path="/vocabulary-topics/exercise-quiz"
            element={<VocabularyQuiz />}
          />
          <Route path="/dialogue-topics" element={<A1Dialogues />} />
          <Route
            path="/dialogue-topics/:dialogueTopicId"
            element={<DialoguePage />}
          />
          <Route path="/QuizPictures" element={<QuizPictures />} />
          <Route path="/PresentTense" element={<PresentTense />} />
          <Route path="/vocabulary/favoritewords" element={<FavoriteWords />} />
          <Route path="/SentenceBuilderEx" element={<SentenceBuilderEx />} />
          SentenceBuilderEx
        </Routes>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
const AppContainer = styled.section`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin-left: 0;
`;
