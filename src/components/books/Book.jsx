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
const DefaultooltipContent = {
  french: "Verb pas trouver",
  english: "Verb is missing",
  georgian: "ზმნა ვერ მოიძებნა",
  definition: "definition pas trouver.",
  part_of_speech: "v",
};
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
  const verbDetails = selectedBook && selectedBook?.verbs;
  // console.log("verbDetails", verbDetails);
  const verbsFormMapping =
    selectedBook &&
    selectedBook?.chapters &&
    selectedBook?.chapters[selectedChapter].verbFormMapping;
  // console.log("verbFormMapping", verbsFormMapping);

  const verbMappingWithDetails = {};

  for (const key in verbsFormMapping) {
    if (verbsFormMapping.hasOwnProperty(key)) {
      const verbForm = key;
      const verbInfinitive = verbsFormMapping[key];

      // Find the corresponding verb detail
      const verbDetail = verbDetails.find(
        (detail) => detail.french === verbInfinitive
      );

      if (verbDetail) {
        // Add the verb detail to the mapping
        verbMappingWithDetails[verbForm] = verbDetail;
      }
    }
  }

  // console.log("verbMappingWithDetails", verbMappingWithDetails);

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

  // console.log("verbsFormMapping", verbsFormMapping);
  const textVerbs =
    selectedBook &&
    selectedBook?.chapters &&
    selectedBook?.chapters[selectedChapter].textVerbs;

  const verbs = (verbsFormMapping && Object.values(verbsFormMapping)) || [];
  // console.log("verbs", verbs);
  const uniqueVerbs = [...new Set(verbs)];
  // console.log("uniqueVerbs", uniqueVerbs);

  const formatChapterText = (text) => {
    return text.replace(/—/g, "\n-");
  };

  const isWordInVocabulary = (word) =>
    vocabularyTranslations.hasOwnProperty(word);

  const words = chapters && chapters[selectedChapter]?.text?.split(" ");
  // console.log("words", words);
  return (
    <BookContainer>
      <h2>{selectedBook?.title}</h2>
      <BookAuthor>{selectedBook.author}</BookAuthor>
      {/* <ChapterBoxesContainer> */}
      <ChapterPagination
        selectedChapter={selectedChapter}
        totalChapters={selectedBook?.chapters?.length}
        onPrevious={() => setSelectedChapter(selectedChapter - 1)}
        onNext={() => setSelectedChapter(selectedChapter + 1)}
      />

      <VerbsInText uniqueVerbs={uniqueVerbs} />

      {selectedBook &&
        selectedBook.chapters &&
        selectedBook.chapters[selectedChapter] && (
          <ChapterBox key={selectedChapter}>
            <h2>
              {formatChapterText(
                selectedBook.chapters[selectedChapter].chapterTitle
              )}
            </h2>
            <div>
              {words?.map((word, index) => {
                const cleanedWord = cleanWord(word);
                const translation = vocabularyTranslations[cleanedWord];
                const isClicked = selectedWord === word;
                const isInVocabulary = isWordInVocabulary(cleanedWord);

                const isTextVerb = textVerbs.includes(cleanedWord);
                // console.log("isTextVerbs", isTextVerb);

                const isTextVerbsWord =
                  isTextVerb && verbsFormMapping[cleanWord];

                const tooltipContent = isTextVerb
                  ? verbMappingWithDetails[cleanedWord]
                  : "";

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
                              tooltipContent={
                                tooltipContent
                                  ? tooltipContent
                                  : DefaultooltipContent
                              }
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
                      <span className={index === 0 ? " first" : ""} key={index}>
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
      <BottomPart>
        <VocabularyBox>
          <BookVocabulary vocabularyTranslations={vocabularyTranslations} />
        </VocabularyBox>
        <ChapterPagination
          selectedChapter={selectedChapter}
          totalChapters={selectedBook?.chapters?.length}
          onPrevious={() => setSelectedChapter(selectedChapter - 1)}
          onNext={() => setSelectedChapter(selectedChapter + 1)}
        />
      </BottomPart>
      {/* </ChapterBoxesContainer> */}
    </BookContainer>
  );
};

export default Book;

const BookContainer = styled.div`
  background-color: ${(props) => props.theme.primaryBackground};
  display: flex;

  flex-direction: column;
  align-items: center;
  /* padding: 2rem; */
  max-width: 95%;
  /* outline: 1px solid red; */
  overflow-x: hidden;
  box-sizing: border-box;
  padding: 0.4rem;
  margin: 0;
  margin-top: 3rem;
  /* margin: 0 auto; */
  span {
    &.first {
      margin-left: 1rem;
      font-size: ${(props) => props.theme.medium};
      font-weight: bold;
    }
  }
`;
const ChapterBox = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;
  max-width: 100%;
  padding: 0.4rem;
  /* margin-right: 0.2rem; */
  /* outline: 2px solid violet; */
  overflow-x: hidden;
  /* margin: 0 0.1rem; */
`;
const BookAuthor = styled.span`
  font-style: italic;
  position: relative;
  /* outline: 1px solid green; */

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
  max-width: 100%;
  font-size: 1.1rem;
  letter-spacing: 1px;

  font-family: "Palatino", sans-serif;
  /* outline: 1px solid green; */
`;

const ChapterBoxesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  outline: 1px solid black;

  /* gap: 1rem; */
  max-width: 90%;
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
  width: 180px;

  /* outline: 1px solid blue; */
  background-color: ${(props) => props.theme.highlight3};
  top: -480%;
  left: -30%;
  /* display: flex; */
  text-align: center;
  border-radius: 8px;
`;
const BottomPart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
`;

const VerbBox = styled.span`
  background-color: ${(props) => props.theme.highlight2};
  /* text-decoration: underline; */
  position: relative;
  padding: 0.2rem 0.4rem;
  margin-top: 1rem;
`;
const VocabularyBox = styled.span`
  overflow-x: hidden; /* Hide horizontal overflow */
  box-sizing: border-box;
  max-width: 100%;
  /* border: 1px solid red; */

  display: flex;
  align-items: flex-start;
  align-self: flex-start;
  margin-right: auto;
  flex-direction: column;
  /* align-items: center; */
`;
