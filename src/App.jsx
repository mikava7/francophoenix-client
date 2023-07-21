import { useState, useEffect } from "react";
import styled from "styled-components";
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
import BookDisplay from "./components/books/BookDisplay";
function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/courses" element={<Courses />} />
        <Route path="/beginner" element={<JaimeEtClaire />} />
        <Route path="/intermediate" element={<IntermediatePage />} />
        <Route path="/advanced" element={<AdvancedPage />} />

        <Route path="/books" element={<Books />} />
        <Route path="/book-display" element={<BookDisplay />} />

        <Route path="/books/level/a1-a2" element={<A1A2Books />} />
        <Route path="/books/level/a2-b1" element={<A2B1Books />} />
        <Route path="/books/level/b1-b2" element={<B1B2Books />} />
      </Routes>
    </>
  );
}

export default App;
