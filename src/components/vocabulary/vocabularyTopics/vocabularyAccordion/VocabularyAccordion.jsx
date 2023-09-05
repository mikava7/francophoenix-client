import { useState } from "react";
import { styled } from "styled-components";
import { useTranslation } from "react-i18next";
import ListenImg from "../../../../../public/icons/sound-50.png";
import AddToFavorites from "../../../Utility/AddToFavorites";
import AccordionExpendedContent from "./AccordionExpendedContent";
import useListenWord from "../../../../hooks/useListenWord";
import useScrollToTopOnRouteChange from "../../../../hooks/useScrollToTopOnRouteChange";
import AddToFlashcards from "../../../Utility/AddToFlashcards";
import { ListenIcon, ChevronIcon } from "../../../../Styles/globalStyles";
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
              <ListenIcon
                onClick={handleListen(word)}
                isActive={isActiveStates[index]}
              >
                <img src={ListenImg} alt="ListenImg" />
              </ListenIcon>

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
  /* align-items: center; */
  max-width: 99%;
  overflow-x: hidden;

  margin: 0 auto;

  margin-right: auto;

  background-color: ${(props) => props.theme.primaryBackground};
  color: ${(props) => props.theme.primaryText};
  @media (min-width: 767px) and (max-width: 920px) {
    /* margin-right: auto;
    border: 2px solid black; */
    align-items: center;
    max-width: 99%;
  }
  @media (min-width: 577px) and (max-width: 767px) {
    max-width: 90%;
    /* border: 2px solid black; */
  }
  @media (min-width: 393px) and (max-width: 576px) {
    width: 95%;
    /* border: 2px solid blue; */
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
  /* outline: 2px solid blue; */
  margin-left: 0.5rem;
  width: 97%;
  margin-bottom: 1rem;
  border-radius: 12px 12px 0 0;
  @media (min-width: 767px) and (max-width: 920px) {
    width: 97%;
  }
`;

const AccordionHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  margin: 0.5rem auto;
  /* margin-right: auto; */
  width: 92%;

  overflow: hidden;

  cursor: pointer;
  background-color: ${(props) =>
    props.isExpanded ? "#e6af68" : props.theme.secondaryBackground};
  color: ${(props) => props.theme.primaryText};
  &:hover {
    background-color: ${(props) => props.theme.tertiaryBackground};
  }
  @media (min-width: 767px) and (max-width: 920px) {
    /* outline: 1px solid red; */

    width: 90%;
  }
  @media (min-width: 577px) and (max-width: 767px) {
    width: 90%;
    /* outline: 2px solid red; */
  }

  @media (min-width: 393px) and (max-width: 576px) {
    width: 88%;
    /* outline: 2px solid green; */
  }
  @media (max-width: 392px) {
    /* outline: 2px solid red; */
    width: 87%;
  }
  @media (min-width: 322px) and (max-width: 359px) {
    /* outline: 2px solid black; */
    width: 84%;
    flex-wrap: wrap;
    font-size: ${({ theme }) => theme.extraSmall};
  }
  @media (max-width: 321px) {
    /* outline: 2px solid red; */
    width: 80%;
    flex-wrap: wrap;
    font-size: ${({ theme }) => theme.extraSmall};
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
    margin-left: 0;
  }
  @media (max-width: 364px) {
    margin-left: 0;

    font-size: ${({ theme }) => theme.extraSmall};
  }
  @media (max-width: 321px) {
    margin-left: 0;
    width: 60%;

    font-size: ${({ theme }) => theme.extraSmall};
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
  @media (max-width: 364px) {
    margin-left: 1rem;

    font-size: ${({ theme }) => theme.extraSmall};
  }
`;
const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  margin-left: auto;

  gap: 1rem;
  text-align: center;
  /* border: 1px solid grey; */
  pointer-events: ${(props) => (props.isExpanded ? "none" : "auto")};
  @media (min-width: 768px) and (max-width: 1220px) {
    /* outline: 1px solid red; */
    gap: 1rem;
    /* width: 90%; */
  }
  @media (min-width: 577px) and (max-width: 767px) {
    /* outline: 1px solid red; */
    gap: 0.8rem;
  }
  @media (min-width: 359px) and (max-width: 577px) {
    /* outline: 1px solid red; */
    gap: 0.2rem;
  }
  @media (max-width: 364px) {
    margin-right: 0;
    gap: 0.2rem;
  }
  @media (max-width: 321px) {
    margin-right: 0;
    gap: 0.1rem;
  }
`;

const Example = styled.span`
  margin: 0 0.5rem 0 1rem;
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
