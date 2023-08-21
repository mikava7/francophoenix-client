import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooksByLevel } from "../../redux/slices/books/booksSlice";
import WordTooltip from "./wordTooltips/WordTooltip";
import { fetchDictionary } from "../../redux/slices/dictionarySlice/allWordsFromDictionarySlice";
import Loading from "../loading/Loading";
import { useTranslation } from "react-i18next";

const Book = () => {
  const { bookId } = useParams();
  const dispatch = useDispatch();
  const { i18n } = useTranslation();
  const isGeorgian = i18n.language === "ka";

  const selectedBook =
    useSelector((state) =>
      state.books.books.find((book) => book._id === bookId)
    ) || [];
  const { chapters } = selectedBook || [];
  const errorBook = useSelector((state) => state.books.error);

  const dictionary =
    useSelector((state) => state.allWordsFromDictionary.dictionary) || [];
  const isLoadingDictionary = useSelector(
    (state) => state.dictionary.isLoading
  );
  const errorDictionary = useSelector(
    (state) => state.allWordsFromDictionary.error
  );

  const [englishTr, setEnglishTr] = useState({});
  const [georgianTr, setGeorgianTr] = useState({});
  useEffect(() => {
    // Fetch dictionary data and update extracted dictionaries
    dispatch(fetchDictionary()).then(() => {
      const updatedEnglishTr = {};
      const updatedGeorgianTr = {};

      dictionary.forEach((item) => {
        const french = item["french"];
        const english = item["english"];
        const georgian = item["georgian"];

        updatedEnglishTr[french] = english;
        updatedGeorgianTr[french] = georgian;
      });

      // Update the state with the extracted dictionaries
      setEnglishTr(updatedEnglishTr);
      setGeorgianTr(updatedGeorgianTr);
    });
  }, [dispatch, dictionary]); // Make sure to include dictionary as a dependency to update the extracted dictionaries when dictionary data changes

  const secondLanguage = isGeorgian ? georgianTr : englishTr;

  const isLoading = useSelector((state) => state.books.isLoading);

  const [selectedChapter, setSelectedChapter] = useState(0); // State to keep track of the selected chapter index
  const [selectedWord, setSelectedWord] = useState("");

  const handleWordClick = (word) => {
    setSelectedWord((prevWord) => (prevWord === word ? "" : word));
  };

  useEffect(() => {
    dispatch(fetchBooksByLevel("B1"));
  }, [dispatch, bookId]);

  // Error handling
  if (isLoading) {
    return <Loading />;
  }

  if (errorBook) {
    return (
      <p>
        Oops, an error occurred while fetching book data: {errorBook.message}
      </p>
    );
  }

  if (!selectedBook) {
    return <p>Book not found.</p>;
  }

  if (isLoadingDictionary) {
    return <Loading />;
  }

  if (errorDictionary) {
    return (
      <p>
        Oops, an error occurred while fetching dictionary data:{" "}
        {errorDictionary.message}
      </p>
    );
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
      <h1 onClick={() => speakWord(selectedBook.title)}>
        {selectedBook.title}
      </h1>

      <BookAuthor>{selectedBook.author}</BookAuthor>
      <ChapterBoxesContainer>
        {selectedBook.chapters.map((chapter, index) => (
          <ChapterBox key={index}>
            <h3>{formatChapterText(chapter.chapterTitle)}</h3>
            <p>{formatChapterText(chapter.subtitle)}</p>
            <div>
              {words.map((word, index) => {
                const translation = secondLanguage[word];

                // Check if the word is clicked
                const isClicked = selectedWord === word;

                return (
                  <ChapterText
                    key={index}
                    onClick={() => handleWordClick(word)}
                  >
                    {isClicked && translation ? ( // Display the tooltip if the translation exists and the word is hovered
                      <WordTooltip
                        content={translation}
                        handleWordClick={handleWordClick}
                      >
                        {formatChapterText(word)}
                      </WordTooltip>
                    ) : (
                      // Display the word as is
                      formatChapterText(word)
                    )}{" "}
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
