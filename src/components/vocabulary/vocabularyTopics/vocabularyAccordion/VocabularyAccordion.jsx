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
              {/* <AddToFavorites
                word={word}
                definition={definition[index]}
                secondLanguage={secondLanguage[index]}
              /> */}

              <AddToFlashcards
                word={word}
                definition={definition[index]}
                secondLanguage={secondLanguage[index]}
              />
              <ChevronIcon
                onClick={() => toggleAccordion(index)}
                isExpanded={index === expandedIndex}
              >
                &#9662;
              </ChevronIcon>
            </IconsWrapper>
            {/* <Example>{t("Définition")}</Example> */}
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
  overflow: hidden;
  max-width: 90%;
  /* margin: 0 auto; */
  /* outline: 1px solid blue; */
  /* border: 2px solid black; */
  margin-right: auto;

  background-color: ${(props) => props.theme.primaryBackground};
  color: ${(props) => props.theme.primaryText};
  @media (min-width: 767px) and (max-width: 920px) {
    /* margin-right: auto;
    border: 2px solid black; */
    align-items: center;
    max-width: 100%;
  }
  @media (min-width: 577px) and (max-width: 767px) {
    /* max-width: 60%; */
    /* border: 2px solid blue; */
  }
  @media (min-width: 393px) and (max-width: 576px) {
    width: 95%;
  }
  @media (max-width: 392px) {
    /* margin: 0 auto; */
    width: 95%;

    /* border: 2px solid grey; */
  }
`;
const AccordionItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 90%;
  margin-bottom: 1rem;
  border-radius: 12px 12px 0 0;
  @media (min-width: 767px) and (max-width: 920px) {
    width: 100%;
  }
`;

const AccordionHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  margin: 0 auto;
  /* margin-right: auto; */
  width: 70%;
  overflow: hidden;

  cursor: pointer;
  background-color: ${(props) =>
    props.isExpanded ? "#e6af68" : props.theme.secondaryBackground};
  color: ${(props) => props.theme.primaryText};
  &:hover {
    background-color: ${(props) => props.theme.primaryBackground};
  }
  @media (min-width: 767px) and (max-width: 920px) {
    padding: 0.5rem;
    width: 98%;
  }
  @media (min-width: 577px) and (max-width: 767px) {
    /* font-size: ${({ theme }) => theme.medium}; */
  }

  @media (min-width: 393px) and (max-width: 576px) {
    /* margin: 0 auto; */
    /* border: 2px solid green; */

    width: 100%;
  }
  @media (max-width: 392px) {
    width: 100%;

    /* font-size: ${({ theme }) => theme.small}; */
  }
`;
const FrenchWord = styled.p`
  font-weight: bold;
  /* border: 1px solid grey; */

  width: 40%;
  margin-left: 0.4rem;
  font-size: ${({ theme }) => theme.medium};
  @media (min-width: 577px) and (max-width: 767px) {
    font-size: ${({ theme }) => theme.mediumSmall};
  }
  @media (max-width: 577px) {
    font-size: ${({ theme }) => theme.small};
  }
`;
const SecondLanguageWord = styled.span`
  font-size: ${({ theme }) => theme.mediumSmall};
  width: 35%;
  /* border: 1px solid grey; */

  @media (max-width: 577px) {
    overflow-x: auto; /* Use 'auto' instead of 'scroll' */
    font-size: ${({ theme }) => theme.extraSmall};
    margin-left: 0.5rem;
  }
`;
const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* gap: 0.1rem; */
  margin-left: auto;
  margin-right: 0.5rem;
  max-width: 100px;
  text-align: center;
  /* border: 1px solid grey; */
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

  /* border: 1px solid grey; */
`;

export const AccordionListenIcon = styled.div`
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
