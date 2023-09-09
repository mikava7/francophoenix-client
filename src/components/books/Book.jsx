import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSelectedBook } from "../../redux/slices/books/booksSlice";
import WordTooltip from "./wordTooltips/WordTooltip";
import Loading from "../loading/Loading";
import { useTranslation } from "react-i18next";
import ChapterPagination from "./chapterPagination/ChapterPagination";
import TooltipComponent from "../vocabulary/vocabularyTopics/Text/TooltipComponent";
import { handleMouseEnter } from "../Utility/utils";
import VerbsInText from "../vocabulary/verbsinText/VerbsInText";
import BookVocabulary from "./bookVocabulary/BookVocabulary";
const Book = () => {
  const { bookId } = useParams();
  const dispatch = useDispatch();

  const [isHovering, setIsHovering] = useState(false);
  const [hoveredVerb, setHoveredVerb] = useState(""); // State to track hovered verb
  const [hoveredWordIndex, setHoveredWordIndex] = useState(null); // State to track hovered word index

  const { i18n } = useTranslation();
  const isGeorgian = i18n.language === "ka";

  const selectedBook = useSelector((state) => state.books.selectedBook) || [];
  const isLoading = useSelector((state) => state.books.isLoading);
  const { chapters } = selectedBook || [];

  const [selectedChapter, setSelectedChapter] = useState(0);
  const [selectedWord, setSelectedWord] = useState("");
  const vocabulary = chapters && chapters[selectedChapter].chapterVocabulary;
  // console.log("chapters", chapters);
  // console.log("vocabulary", vocabulary);

  const vocabularyTranslations = {};
  vocabulary &&
    vocabulary?.forEach((word) => {
      // console.log("word", word.georgian);
      vocabularyTranslations[word.french] = isGeorgian
        ? word.georgian
        : word.english;
    });
  // console.log("vocabularyTranslations", vocabularyTranslations);

  const cleanWord = (word) => {
    return word.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  };

  // console.log("selectedChapter", selectedChapter);
  // console.log("selectedBook", selectedBook);

  const handleWordClick = (word) => {
    setSelectedWord((prevWord) => (prevWord === word ? "" : word));
  };

  useEffect(() => {
    dispatch(fetchSelectedBook(bookId));
  }, [dispatch, bookId]);

  if (isLoading) {
    return <Loading />;
  }
  if (selectedBook.lengt === 0) {
    return <Loading />;
  }
  if (!selectedBook) {
    return <p>Book not found.</p>;
  }
  const verbsFormMapping =
    selectedBook &&
    selectedBook?.chapters &&
    selectedBook?.chapters[selectedChapter].verbFormMapping;
  const textVerbs =
    selectedBook &&
    selectedBook?.chapters &&
    selectedBook?.chapters[selectedChapter].textVerbs;

  const verbs = (verbsFormMapping && Object.values(verbsFormMapping)) || [];
  const uniqueVerbs = [...new Set(verbs)];

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
        <div>
          <VerbsInText uniqueVerbs={uniqueVerbs} />
        </div>
        {selectedBook &&
          selectedBook.chapters &&
          selectedBook.chapters[selectedChapter] && (
            <ChapterBox key={selectedChapter}>
              <h3>
                {formatChapterText(
                  selectedBook.chapters[selectedChapter].chapterTitle
                )}
              </h3>
              <div>
                {words?.map((word, index) => {
                  const cleanedWord = cleanWord(word);
                  const translation = vocabularyTranslations[cleanedWord];
                  const isClicked = selectedWord === word;
                  const isInVocabulary = isWordInVocabulary(cleanedWord);

                  const isTextVerb = textVerbs.includes(cleanedWord);

                  const handleMouseEnter = (wordIndex) => {
                    if (isTextVerb) {
                      setIsHovering(true);
                      setHoveredWordIndex(wordIndex); // Set the hovered word index
                      const word = words[wordIndex];
                      const cleanedWord = cleanWord(word);
                      const appropriateVerb = verbsFormMapping[cleanedWord];
                      setHoveredVerb(appropriateVerb);
                    }
                  };

                  // console.log("hoveredVerb in return", hoveredVerb); // Get the appropriate verb

                  const handleMouseLeave = () => {
                    if (isTextVerb) {
                      setIsHovering(false);

                      setHoveredVerb("");
                    }
                  };

                  let wordElement = null;
                  // console.log("Before if (isInVocabulary)");
                  if (isInVocabulary) {
                    // console.log("Inside if (isInVocabulary)");
                    wordElement = <b>{word}</b>;
                    // console.log("wordElement", wordElement);
                  } else {
                    // console.log("Inside else");
                    wordElement = (
                      <VerbBox
                        className={index === 0 ? "first" : ""}
                        key={index}
                        onMouseEnter={() => handleMouseEnter(index)} // Pass index
                        onMouseLeave={handleMouseLeave}
                      >
                        {word}
                        <TooltipComponentBox>
                          {isHovering &&
                            hoveredWordIndex === index && ( // Conditionally render based on the hovered word index
                              <TooltipComponent
                                id={`verb-tooltip-${index}`}
                                tooltipContent={hoveredVerb}
                                conjugated={word}
                                index={index}
                              />
                            )}
                        </TooltipComponentBox>
                      </VerbBox>
                    );
                  }

                  return (
                    <ChapterText key={index}>
                      {isTextVerb ? (
                        <Highlighted
                          content={translation}
                          handleWordClick={handleWordClick}
                          wordElement={wordElement}
                        >
                          {wordElement}
                        </Highlighted>
                      ) : (
                        <span
                          className={index === 0 ? " first" : ""}
                          key={index}
                        >
                          {isInVocabulary ? (
                            <VocabularyWord>{word}</VocabularyWord>
                          ) : (
                            <span> {word}</span>
                          )}
                        </span>
                      )}
                    </ChapterText>
                  );
                })}
              </div>
            </ChapterBox>
          )}
        <BookVocabulary vocabularyTranslations={vocabularyTranslations} />
        <ChapterPagination
          selectedChapter={selectedChapter}
          totalChapters={selectedBook?.chapters?.length}
          onPrevious={() => setSelectedChapter(selectedChapter - 1)}
          onNext={() => setSelectedChapter(selectedChapter + 1)}
        />
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
  span {
    &.first {
      margin-left: 1rem;
      font-size: ${(props) => props.theme.medium};
      font-weight: bold;
    }
  }
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
  margin: 0 0.3rem;
  padding: 0.2rem 0.4rem;
  /* border: 1px solid red; */
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  @media (max-width: 392px) {
    padding: 0.1rem;
  }
`;
const VocabularyWord = styled.span`
  /* border: 1px solid grey; */
  font-weight: bold;
  margin-left: 0.2rem;
  /* background: yellow; */
`;
const TooltipComponentBox = styled.span`
  position: absolute;
  background-color: ${(props) => props.theme.highlight3};

  top: -120%;
  left: -40%;
  border-radius: 12px;
  text-align: center;
  cursor: pointer;
`;
const VerbBox = styled.span`
  background-color: ${(props) => props.theme.highlight2};
  /* text-decoration: underline; */
  position: relative;
  padding: 0.2rem 0.4rem;
`;
