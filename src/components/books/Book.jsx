import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooksByLevel } from "../../redux/slices/books/booksSlice";
import WordTooltip from "./wordTooltips/WordTooltip";
import { newWords } from "../../data/wordTranslation";
// import { fetchDictionary } from "../../redux/slices/dictionarySlice/dictionarySlice";
import Loading from "../loading/Loading";
import { useTranslation } from "react-i18next";

const Book = () => {
  const { bookId } = useParams();
  const dispatch = useDispatch();
  const { i18n } = useTranslation();
  const isGeorgian = i18n.language === "ka"; // Change 'geo' to the appropriate language code for Georgian

  const selectedBook =
    useSelector((state) =>
      state.books.books.find((book) => book._id === bookId)
    ) || [];
  const { chapters } = selectedBook || [];
  // console.log(chapters);

  // const dictionary = useSelector((state) => state.dictionary.dictionary) || [];
  // const isLoadingDictionary = useSelector(
  //   (state) => state.dictionary.isLoading
  // );
  // const english = dictionary.map((word) => word.english);
  // const georgian = dictionary.map((word) => word.georgian);

  // const secondLanguage = isGeorgian ? georgian : english;
  // console.log("secondLanguage", secondLanguage);
  // console.log("georgian", georgian);

  // console.log("dictionary", dictionary);
  // console.log("isLoadingDictionaryisLoadingDictionary", isLoadingDictionary);

  const isLoading = useSelector((state) => state.books.isLoading);
  // State to keep track of the hovered word
  const [hoveredWord, setHoveredWord] = useState("");
  const [selectedChapter, setSelectedChapter] = useState(0); // State to keep track of the selected chapter index

  const handleWordHover = (word) => {
    // Event handler when a word is hovered
    setHoveredWord(word);
  };

  const handleWordLeave = () => {
    // Event handler when the word hover is left
    setHoveredWord("");
  };

  // useEffect(() => {
  //   dispatch(fetchDictionary());
  // }, [dispatch]);

  useEffect(() => {
    dispatch(fetchBooksByLevel("B1"));
  }, [dispatch, bookId]);

  if (isLoading) {
    return <Loading />;
  }

  if (!selectedBook) {
    return <p>Book not found.</p>;
  }
  if (isLoadingDictionary) {
    return <Loading />;
  }
  // Function to add a newline before every occurrence of '-'
  const formatChapterText = (text) => {
    return text.replace(/—/g, "\n-");
  };

  // Split the chapter text into individual words
  const words = chapters[selectedChapter].text.split(" ");
  // console.log("words", words);
  return (
    <BookContainer>
      <h2>{selectedBook.title}</h2>

      <h4>{selectedBook.author}</h4>
      <div>
        {selectedBook.chapters.map((chapter, index) => (
          <ChapterText key={index}>
            <div>
              <h3>{formatChapterText(chapter.chapterTitle)}</h3>
              <p>{formatChapterText(chapter.subtitle)}</p>
              <div>
                {words.map((word, index) => {
                  const translation = newWords[word]; // Get the translation for the word from the `newWords` object
                  // const translation = dictionary.find(
                  //   (entry) => entry.french === word
                  // );
                  // console.log("translations", translation);
                  const isHovered = hoveredWord === word; // Check if the word is currently being hovered

                  return (
                    <ChapterText
                      key={index}
                      onMouseEnter={() => handleWordHover(word)}
                      onMouseLeave={handleWordLeave}
                    >
                      {translation && isHovered ? ( // Display the tooltip if the translation exists and the word is hovered
                        <WordTooltip content={translation}>
                          {formatChapterText(word)}
                        </WordTooltip>
                      ) : (
                        formatChapterText(word)
                        // Display the word as is
                      )}{" "}
                    </ChapterText>
                  );
                })}
              </div>
            </div>
          </ChapterText>
        ))}
      </div>
    </BookContainer>
  );
};

export default Book;

const BookContainer = styled.div`
  background: white;
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 3rem;
  padding: 5rem;
  border: 2px solid red;
  max-width: 920px;
`;

const ChapterText = styled.span`
  white-space: pre-line;
  line-height: 2;
  width: 100%;
  /* border: 2px solid blue; */

  font-size: 1.3rem;
  letter-spacing: 1px;
  font-family: "Palatino", sans-serif;
  text-indent: 30px;
`;
