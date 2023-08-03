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

  const dictionary =
    useSelector((state) => state.allWordsFromDictionary.dictionary) || [];
  const isLoadingDictionary = useSelector(
    (state) => state.dictionary.isLoading
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
      <h2 onClick={() => speakWord(selectedBook.title)}>
        {selectedBook.title}
      </h2>

      <h4>{selectedBook.author}</h4>
      <div>
        {selectedBook.chapters.map((chapter, index) => (
          <ChapterText key={index}>
            <div>
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
