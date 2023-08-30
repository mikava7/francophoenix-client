import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSelectedBook } from "../../redux/slices/books/booksSlice";
import WordTooltip from "./wordTooltips/WordTooltip";
import Loading from "../loading/Loading";
import { useTranslation } from "react-i18next";
import ChapterPagination from "./chapterPagination/ChapterPagination";
const Book = () => {
  const { bookId } = useParams();
  const dispatch = useDispatch();
  const { i18n } = useTranslation();
  const isGeorgian = i18n.language === "ka";

  const selectedBook = useSelector((state) => state.books.selectedBook) || [];
  const vocabulary = selectedBook.vocabulary || [];
  const vocabularyTranslations = {};
  vocabulary.forEach((word) => {
    // console.log("word", word.georgian);
    vocabularyTranslations[word.french] = isGeorgian
      ? word.georgian
      : word.english;
  });
  // console.log("vocabularyTranslations", vocabularyTranslations);

  const cleanWord = (word) => {
    return word.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  };

  const { chapters } = selectedBook || [];

  const isLoading = useSelector((state) => state.books.isLoading);

  const [selectedChapter, setSelectedChapter] = useState(0);
  const [selectedWord, setSelectedWord] = useState("");

  const handleWordClick = (word) => {
    setSelectedWord((prevWord) => (prevWord === word ? "" : word));
  };

  useEffect(() => {
    dispatch(fetchSelectedBook(bookId));
  }, [dispatch, bookId]);

  if (isLoading) {
    return <Loading />;
  }

  if (!selectedBook) {
    return <p>Book not found.</p>;
  }

  const formatChapterText = (text) => {
    return text.replace(/—/g, "\n-");
  };

  const isWordInVocabulary = (word) =>
    vocabularyTranslations.hasOwnProperty(word);

  const words = chapters && chapters[selectedChapter]?.text?.split(" ");
  // console.log("words", words);
  return (
    <BookContainer>
      <h1>{selectedBook?.title}</h1>
      <BookAuthor>{selectedBook.author}</BookAuthor>
      <ChapterBoxesContainer>
        <ChapterPagination
          selectedChapter={selectedChapter}
          totalChapters={selectedBook?.chapters?.length}
          onPrevious={() => setSelectedChapter(selectedChapter - 1)}
          onNext={() => setSelectedChapter(selectedChapter + 1)}
        />
        {selectedBook?.chapters?.map((chapter, index) => (
          <ChapterBox key={index}>
            <h3>{formatChapterText(chapter.chapterTitle)}</h3>
            <div>
              {words?.map((word, index) => {
                const cleanedWord = cleanWord(word); // You need to implement the function cleanWord()
                const translation = vocabularyTranslations[cleanedWord];
                const isClicked = selectedWord === word;
                const isInVocabulary = isWordInVocabulary(cleanedWord);
                const wordElement = isInVocabulary ? (
                  <Highlighted
                    key={index}
                    onClick={() => handleWordClick(word)}
                  >
                    {word}
                  </Highlighted>
                ) : (
                  formatChapterText(word)
                );

                return (
                  <ChapterText key={index}>
                    {isClicked && translation ? (
                      <WordTooltip
                        content={translation}
                        handleWordClick={handleWordClick}
                        wordElement={wordElement}
                      >
                        {wordElement}
                      </WordTooltip>
                    ) : (
                      <span>{wordElement} </span>
                    )}
                  </ChapterText>
                );
              })}
            </div>
          </ChapterBox>
        ))}
      </ChapterBoxesContainer>
    </BookContainer>
  );
};

export default Book;

const ChapterBox = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;
const BookContainer = styled.div`
  background-color: ${(props) => props.theme.secondaryBackground};
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 0.1rem;
  padding: 2rem;
  /* max-width: 920px; */
`;

const BookAuthor = styled.span`
  font-style: italic;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 50%;
    height: 2px;
    background-color: ${(props) => props.theme.primaryText};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: calc(100% - 2px); /* Expand width to 100% on hover */
  }
`;

const ChapterText = styled.span`
  white-space: pre-line;
  line-height: 2;
  width: 100%;

  font-size: 1.3rem;
  letter-spacing: 1px;
  font-family: "Palatino", sans-serif;
  text-indent: 30px;
`;
const ChapterBoxesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  width: 100%;
`;
const Highlighted = styled.span`
  background-color: #bdf5bd;
  padding: 0.2rem;
`;
