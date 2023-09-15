import { useState } from "react";
import styled from "styled-components";
import SentenceBuilderEx from "../../../sentenceBuilder/SentenceBuilderEx";
import { displayWord, shuffleArray } from "../../../Utility/utils";
import TooltipComponent from "./TooltipComponent";
import VerbConjugation from "../../../verbs/VerbConjugation/VerbConjugation";
import { Button, StyledLink } from "../../../../Styles/globalStyles";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import RotatingChevron from "../../../Utility/RotatingChevron";
import VerbsInText from "../../verbsinText/VerbsInText";
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
  const { t, i18n } = useTranslation();
  // console.log("isTextVerbs", isTextVerbs);
  const [showArticle, setShowArticle] = useState(false);
  const [rotationArticle, setRotationArticle] = useState(0);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  // console.log("isAuthenticated", isAuthenticated);
  const handleArticleToggle = () => {
    setShowArticle(!showArticle);
    setRotationArticle((prevRotation) => prevRotation + 180);
  };

  const words = text?.split(" ");
  // console.log(words);

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
  // console.log("cleanedVocabulary", cleanedVocabulary);
  const filteredSentenceData = sentenceData.filter(
    (item) => item.words.length <= 7
  );
  // console.log(filteredSentenceData);
  return (
    <TopicTextContainer>
      <div>
        <VerbsInText uniqueVerbs={uniqueVerbs} />
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
              {word}
              <TooltipComponentBox>
                {hoveredVerb === cleanWord && (
                  <TooltipComponent
                    id={`verb-tooltip-${index}`}
                    tooltipContent={tooltipContent}
                    conjugated={word}
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
          return (
            <WordConatiner className={index === 0 ? "first" : ""} key={index}>
              {word}{" "}
            </WordConatiner>
          );
        }
      })}

      <SentenceBuildHeader onClick={handleArticleToggle}>
        {t("Construire la phrase")}
        <RotatingChevron isActive={showArticle} />
      </SentenceBuildHeader>
      {showArticle && isAuthenticated ? (
        <SentenceBuilderEx
          sentenceData={filteredSentenceData}
          isActive={showArticle}
        />
      ) : !isAuthenticated ? (
        <p>
          login to use this exercise: <Link to="/login">login</Link>
        </p>
      ) : null}
    </TopicTextContainer>
  );
};

export default TopicText;

const TopicTextContainer = styled.div`
  font-family: "Poppins", sans-serif;
  font-size: ${(props) => props.theme.medium};
  line-height: ${(props) => props.theme.largeLineHeight};
  letter-spacing: ${(props) => props.theme.extraMegaLetterSpacing};
  border-bottom: 3px solid ${(props) => props.theme.highlight3};
  @media (min-width: 577px) and (max-width: 767px) {
    font-size: ${(props) => props.theme.mediumSmall};
    line-height: ${(props) => props.theme.mediumLineHeight};
    letter-spacing: ${(props) => props.theme.megaLetterSpacing};
  }
  @media (min-width: 393px) and (max-width: 576px) {
    font-size: ${(props) => props.theme.mediumSmall};
    line-height: ${(props) => props.theme.largeLineHeight};
    letter-spacing: ${(props) => props.theme.megaLetterSpacing};
  }
  @media (max-width: 392px) {
    font-size: ${(props) => props.theme.small};
    line-height: ${(props) => props.theme.largeLineHeight};
    letter-spacing: ${(props) => props.theme.extraLargeLetterSpacing};
  }
  h2 {
    display: flex;

    justify-content: center;
  }
`;

const Highlighted = styled.span`
  /* background-color: ${(props) => props.theme.highlight1}; */
  font-weight: bold;

  position: relative;
  @media (max-width: 392px) {
  }
`;
const HighlightedVerb = styled(Highlighted)`
  background-color: ${(props) => props.theme.highlight2};
  margin: 0 0.3rem;
  padding: 0.1rem 0.4rem;
  border-radius: 4px;
  font-weight: 500;

  @media (max-width: 392px) {
    padding: 0.1rem;
  }
`;
const TooltipComponentBox = styled.span`
  position: absolute;
  background-color: ${(props) => props.theme.highlight3};
  top: -120%;
  left: -11%;
  /* padding: 0.2rem 0.4rem; */
  text-align: center;
  cursor: pointer;
`;

const WordConatiner = styled.span`
  &.first {
    margin-left: 1rem;
    font-size: ${(props) => props.theme.medium};
    font-weight: bold;
  }
`;
const SentenceBuildHeader = styled.p`
  margin: 2rem 0;
  font-weight: bold;
  /* text-align: center; */
  display: flex;
  align-items: center;
  justify-content: space-around;
  /* margin-right: 2rem; */
`;
