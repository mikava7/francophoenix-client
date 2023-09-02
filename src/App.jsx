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
import BasicGrammerLessons from "./components/grammer/BasicGrammerLessons";
import BasicGrammerTopic from "./components/grammer/BasicGrammerTopic";
import GrammerTopicPage from "./components/grammer/GrammerTopicPage";
import Flashcards from "./components/flashcard/Flashcards";
import Games from "./pages/games/Games";
import VerbConjugation from "./components/verbs/VerbConjugation/VerbConjugation";
import ContentComingSoon from "./components/ContentComingSoon/ContentComingSoon";
import GrammarLanding from "./components/grammer/GrammarLanding";
import VocabularyLanding from "./components/vocabulary/VocabularyLanding";
import Articles from "./components/grammer/articles/Articles";
import AspectTopicPage from "./components/grammer/AspectTopics/AspectTopicPage";
import Layout from "./layout/Layout";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <GlobalStyle />
        <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/beginner" element={<JaimeEtClaire />} />
          <Route path="/intermediate" element={<IntermediatePage />} />
          <Route path="/advanced" element={<AdvancedPage />} />
          <Route path="/book-display" element={<BookDetails />} />
          <Route path="/books/level/a1-a2" element={<A1A2Books />} />
          <Route path="/books/level/a2-b1" element={<A2B1Books />} />
          <Route path="/books/level/b1-b2" element={<B1B2Books />} />

          {/**8//////////////////////////////////////// */}
          <Route element={<Layout />}>
            <Route
              path="/dictionary"
              element={<FindTranslationForFrenchWord />}
            />
            <Route
              path="/reading-zone/french-easy-reading"
              element={<A2B1Books />}
            />
            <Route
              path="/reading-zone/french-easy-reading/:bookId"
              element={<BookPage />}
            />
            <Route path="/grammar" element={<GrammarLanding />} />
            <Route
              path="/grammar/basic-grammar-lessons"
              element={<BasicGrammerLessons />}
            />
            <Route path="/grammar/:aspect" element={<Articles />} />

            <Route
              path="/grammar-basic/:BasicGrammerTopicId"
              element={<GrammerTopicPage />}
            />
            <Route
              path="/grammar-topics/:TopicId"
              element={<AspectTopicPage />}
            />
            <Route path="/vocabulary" element={<VocabularyLanding />} />
            <Route
              path="/vocabulary/vocabulary-topics"
              element={<Vocabularies />}
            />
            <Route
              path="/vocabulary-topics/:topicId"
              element={<Vocabulary />}
            />

            <Route
              path="/vocabulary/exercise-article"
              element={<ExerciseArticle />}
            />
            <Route
              path="/vocabulary/verb-tense-exercise"
              element={<PresentTense />}
            />
            <Route path="/vocabulary/Flashcards" element={<Flashcards />} />

            <Route
              path="/vocabulary-topics/exercise-quiz"
              element={<VocabularyQuiz />}
            />
            <Route
              path="/vocabulary/favorite-words"
              element={<FavoriteWords />}
            />
            <Route
              path="/vocabulary/sentence-builder"
              element={<SentenceBuilderEx />}
            />

            <Route path="/games" element={<Games />} />

            <Route
              path="/Content-Coming-Soon"
              element={<ContentComingSoon />}
            />
            <Route path="/verbs/:verb" element={<VerbConjugation />} />
          </Route>
          {/**8//////////////////////////////////////// */}

          <Route path="/dialogue-topics" element={<A1Dialogues />} />
          <Route
            path="/dialogue-topics/:dialogueTopicId"
            element={<DialoguePage />}
          />
          <Route path="/quiz-pictures" element={<QuizPictures />} />
        </Routes>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
const AppContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  margin: 0 auto;
  width: 100%;
  outline: 1px solid blue;
`;
