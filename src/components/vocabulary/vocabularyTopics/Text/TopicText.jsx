import { useState } from "react";
import styled from "styled-components";
import SentenceBuilderEx from "../../../sentenceBuilder/SentenceBuilderEx";
import { displayWord, shuffleArray } from "../../../Utility/utils";
import TooltipComponent from "./TooltipComponent";
import VerbConjugation from "../../../verbs/VerbConjugation/VerbConjugation";
import { Button, StyledLink } from "../../../../Styles/globalStyles";
import { Link } from "react-router-dom";
const displayCleanWord = (word) => {
  if (word?.startsWith("l'") || word.startsWith("L'")) {
    return word?.slice(2);
  } else {
    return word;
  }
};

const TopicText = ({
  text,
  vocabulary,
  isTextVerbs,
  verbFormMapping,
  vocabularyData,
}) => {
  const words = displayWord(text)?.split(" ");
  const [hoveredVerb, setHoveredVerb] = useState(null); // State to track hovered verb
  // console.log("verbFormMapping", verbFormMapping);
  const verbs = (verbFormMapping && Object.values(verbFormMapping)) || [];
  const uniqueVerbs = [...new Set(verbs)];

  const generateSentenceBuilderData = (text) => {
    const sentences = text?.split(".");
    const sentenceObjects = sentences?.map((sentence) => {
      const trimmedSentence = sentence?.trim(); // Trim leading and trailing whitespace
      const words = trimmedSentence
        .split(/\s|,/)
        .filter((word) => word.length > 0);
      const shuffledWords = shuffleArray(words);

      return { sentence: trimmedSentence, words: shuffledWords };
    });
    return sentenceObjects; // Return the generated data
  };
  const sentenceData = generateSentenceBuilderData(text);

  const cleanedVocabulary = vocabulary?.map(
    (word) =>
      displayWord(word)
        ?.toLowerCase()
        ?.replace(" (f.)", "") // Remove "(f.)" if present
        ?.replace(" (m.)", "") // Remove "(f.)" if present
  );

  return (
    <TopicTextContainer>
      <div>
        <VerbsInText>
          {uniqueVerbs.map((verb, index) => (
            <StyledLink to={`/verbs/${verb}`}>
              <li key={index}>
                <Button>{verb}</Button>
              </li>
            </StyledLink>
          ))}
        </VerbsInText>
      </div>
      {words?.map((word, index) => {
        const cleanWord = displayCleanWord(word)
          .toLowerCase()
          .replace(/[^a-z]/g, "");
        const isVocabularyWord = cleanedVocabulary?.includes(cleanWord);
        const isTextVerbsWord = isTextVerbs && verbFormMapping[cleanWord];

        const tooltipContent = isTextVerbsWord
          ? verbFormMapping[cleanWord]
          : "";

        const handleMouseEnter = () => {
          if (isTextVerbsWord) {
            setHoveredVerb(cleanWord);
          }
        };

        const handleMouseLeave = () => {
          if (isTextVerbsWord) {
            setHoveredVerb(null);
          }
        };

        if (isTextVerbsWord) {
          return (
            <HighlightedVerb
              key={index}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {word}{" "}
              <TooltipComponentBox>
                {hoveredVerb === cleanWord && (
                  <TooltipComponent
                    id={`verb-tooltip-${index}`}
                    tooltipContent={tooltipContent}
                    word={word}
                    index={index}
                    // place="top"
                    // effect="solid"
                    offset={{ top: -100 }}
                  />
                )}
              </TooltipComponentBox>
            </HighlightedVerb>
          );
        } else if (isVocabularyWord) {
          return <Highlighted key={index}>{word} </Highlighted>;
        } else {
          return <span key={index}>{word} </span>;
        }
      })}
      <SentenceBuilderEx sentenceData={sentenceData} />
    </TopicTextContainer>
  );
};

export default TopicText;

const TopicTextContainer = styled.div`
  padding: 1rem 2rem;
  line-height: 1.6;
  font-size: 1.2rem;
  letter-spacing: 1.1px;
`;

const Highlighted = styled.span`
  background-color: ${(props) => props.theme.highlight1};
  padding: 0.2rem;
  font-weight: bold;

  position: relative;
`;
const HighlightedVerb = styled(Highlighted)`
  background-color: ${(props) => props.theme.highlight2};
`;
const TooltipComponentBox = styled.span`
  position: absolute;
  background-color: ${(props) => props.theme.highlight3};
  top: -100%;
  left: 40%;
  text-align: center;
  cursor: pointer;
`;
const VerbsInText = styled.ul`
  display: flex;
  list-style: none;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  margin-bottom: 1rem;
  li {
    display: flex;
    text-decoration: none;
    padding: 0;
    margin: 0;
    flex-wrap: wrap;
    button {
      text-decoration: none;
      margin: 0;
      width: auto;
      font-size: 1.2rem;
    }
  }
`;
