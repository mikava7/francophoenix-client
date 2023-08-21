import { useState } from "react";
import { styled } from "styled-components";
import { useTranslation } from "react-i18next";
import ListenImg from "../../../../../public/icons/sound-50.png";
import AddToFavorites from "../../../Utility/AddToFavorites";
import AccordionExpendedContent from "./AccordionExpendedContent";
import useListenWord from "../../../../hooks/useListenWord";
import useScrollToTopOnRouteChange from "../../../../hooks/useScrollToTopOnRouteChange";
import AddToFlashcards from "../../../Utility/AddToFlashcards";
const VocabularyAccordion = ({ frenchWords, secondLanguage, definition }) => {
  // console.log("definition in VocabularyAccordion", definition);
  useScrollToTopOnRouteChange();
  const { t } = useTranslation();
  const [expandedIndex, setExpandedIndex] = useState(null);
  // console.log("frenchWords", frenchWords);

  const [isActiveState, setIsActiveState] = useState(
    frenchWords?.map(() => false)
  );

  const { handleListen, isActiveStates } = useListenWord();

  const toggleAccordion = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <AccordionContaner>
      {frenchWords?.map((word, index) => (
        <AccordionItem key={index}>
          <AccordionHeader>
            <FrenchWord>{word}</FrenchWord>

            <SecondLanguageWord>
              {secondLanguage[index] || ""}
            </SecondLanguageWord>
            <IconsWrapper>
              <AccordionListenIcon
                onClick={handleListen(word)}
                isActive={isActiveStates[index]}
              >
                <img src={ListenImg} alt="ListenImg" />
              </AccordionListenIcon>
              <AddToFavorites
                word={word}
                definition={definition[index]}
                secondLanguage={secondLanguage[index]}
              />

              <AddToFlashcards
                word={word}
                definition={definition[index]}
                secondLanguage={secondLanguage[index]}
              />
            </IconsWrapper>
            <Example>{t("Définition")}</Example>
            <ChevronIcon
              onClick={() => toggleAccordion(index)}
              isExpanded={index === expandedIndex}
            >
              &#9662;
            </ChevronIcon>
          </AccordionHeader>
          <AccordionExpendedContent
            index={index}
            expandedIndex={expandedIndex}
            definition={definition}
          />
        </AccordionItem>
      ))}
    </AccordionContaner>
  );
};

export default VocabularyAccordion;

const AccordionContaner = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  font-size: 1.4rem;
  background-color: ${(props) => props.theme.primaryBackground};
  color: ${(props) => props.theme.primaryText};
`;
const AccordionItem = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.4rem;
  margin-bottom: 1rem;
  border-radius: 12px;
`;

const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  max-width: 100%;

  cursor: pointer;
  background-color: ${(props) =>
    props.isExpanded ? "#e6af68" : props.theme.secondaryBackground};
  color: ${(props) => props.theme.primaryText};
  &:hover {
    background-color: ${(props) => props.theme.primaryBackground};
  }
  @media (max-width: 920px) {
    font-size: 1.3rem;
    padding: 0.8rem;
  }
  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 0.6rem;
  }

  @media (max-width: 500px) {
    font-size: 1rem;
    padding: 0.6rem;
  }
`;
const FrenchWord = styled.div`
  font-weight: bold;
  width: 35%;
  margin-left: 1rem;
  @media (max-width: 920px) {
    width: 30%;
    margin-left: 0.8rem;
  }
  @media (max-width: 768px) {
    width: 30%;
    margin-left: 0.6rem;
  }

  @media (max-width: 500px) {
    width: 30%;
    margin-left: 0.4rem;
  }
`;
const SecondLanguageWord = styled.div`
  width: 35%;
  @media (max-width: 920px) {
    width: 30%;
    margin-left: 0.8rem;
  }
  @media (max-width: 768px) {
    width: 30%;
    margin-left: 0.6rem;
  }

  @media (max-width: 500px) {
    width: 25%;
    margin-left: 0.4rem;
  }
`;
const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  width: 60px;
  max-width: 120px;
  text-align: center;
  margin-right: 0.5rem;
  pointer-events: ${(props) => (props.isExpanded ? "none" : "auto")};
`;

const Example = styled.span`
  margin: 0 0.5rem 0 1rem;
`;
const ChevronIcon = styled.div`
  transform: ${(props) =>
    props.isExpanded ? "rotate(180deg)" : "rotate(0deg)"};
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  margin: 0 0.5rem;
`;

const AccordionListenIcon = styled.div`
  display: flex;
  align-items: center;
  & > img {
    width: ${(props) => props.width || "1.2rem"};
    height: ${(props) => props.height || "1.2rem"};
    cursor: pointer;

    filter: ${(props) => (props.isActive ? "none" : "invert(-150%)")};
    transition: transform 0.3s ease-in-out;
    transform: ${(props) => (props.isActive ? "scale(1.1)" : "scale(1)")};
  }
`;
