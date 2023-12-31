import { useState, useEffect } from "react";
import { styled } from "styled-components";
import AddToFavorites from "../../../Utility/AddToFavorites";
import AccordionExpendedContent from "./AccordionExpendedContent";
import useListenWord from "../../../../hooks/useListenWord";
import useScrollToTopOnRouteChange from "../../../../hooks/useScrollToTopOnRouteChange";
import AddToFlashcards from "../../../Utility/AddToFlashcards";
import { ListenIcon, ChevronIcon } from "../../../../Styles/globalStyles";
import { useTranslation } from "react-i18next";
import Listen from "../../../Listen";
import PDFVocabularyDocument from "../../../Utility/pdf/PDFDocument";
import { useSelector } from "react-redux";
import LinkWithPreviousPath from "../../../Utility/LinkWithPreviousPath";
const VocabularyAccordion = ({
  wordsInTargetLanguage,
  secondLanguage,
  definition,
  targetedTitle,
  nativeLanguageTitle,
  currentURL,
  contentId,
}) => {
  // Use custom hook for scroll behavior
  useScrollToTopOnRouteChange();

  // Access translation function
  const { t } = useTranslation();

  // State to manage expanded accordion item
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [fontSizes, setFontSizes] = useState([
    "17px",
    "18px",
    "20px",
    "22px",
    "24px",
    "28px",
    "32px",
    "36px",
  ]);
  const [selectedFontSize, setSelectedFontSize] = useState("17px");

  // Get user authentication status from Redux
  const auth = useSelector((state) => state?.auth?.auth?.user) || {};
  const userId = auth?._id;

  // State for tracking active items
  const [isActiveState, setIsActiveState] = useState(
    wordsInTargetLanguage?.map(() => false)
  );

  // Custom hook for listening to word pronunciations
  const { handleListen, isActiveStates } = useListenWord();

  // Function to toggle accordion items
  const toggleAccordion = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  // Get the selected target language from local storage
  const targetLanguageCode = localStorage.getItem("targetLanguageSelected");

  return (
    <AccordionContaner>
      <PDFLinkBox>
        {t("Télécharger le PDF:")}
        {userId ? (
          // Display the download link if the user is logged in
          <>
            <FontSizeContainer>
              <label htmlFor="fontSize">
                {t("Sélectionnez la taille de la police:")}
              </label>
              <FontSizeSelect
                name="fontSize"
                id="fontSize"
                onChange={(e) => setSelectedFontSize(e.target.value)}
              >
                {fontSizes.map((fontSize, index) => (
                  <option key={index} value={fontSize}>
                    {fontSize}
                  </option>
                ))}
                {/* {console.log("selectedFontSize", selectedFontSize)} */}
              </FontSizeSelect>
            </FontSizeContainer>
            <PDFVocabularyDocument
              wordsInTargetLanguage={wordsInTargetLanguage}
              secondLanguage={secondLanguage}
              targetedTitle={targetedTitle}
              nativeLanguageTitle={nativeLanguageTitle}
              currentURL={currentURL}
              contentId={contentId}
              userId={userId}
              selectedFontSize={selectedFontSize}
            />
          </>
        ) : (
          // Display a message or hide the link if the user is not logged in
          <LoginMessage>
            {t("Veuillez vous connecter pour télécharger.")}
            <LinkWithPreviousPath to="/login">
              {t("Connexion")}
            </LinkWithPreviousPath>
          </LoginMessage>
        )}
      </PDFLinkBox>

      {wordsInTargetLanguage?.map((word, index) => (
        <AccordionItem key={index}>
          <AccordionHeader>
            <Words>
              <FrenchWord>{word}</FrenchWord>

              <SecondLanguageWord>
                {secondLanguage[index] || ""}
              </SecondLanguageWord>
            </Words>
            <IconsWrapper>
              <ListenIcon
                onClick={handleListen(word, targetLanguageCode)}
                isActive={isActiveStates[index]}
              >
                <Listen />
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
  align-items: center;
  max-width: 99%;
  overflow-x: hidden;
  justify-content: center;

  /* margin-right: auto; */

  background-color: ${(props) => props.theme.primaryBackground};
  color: ${(props) => props.theme.primaryText};
  @media (min-width: 767px) and (max-width: 920px) {
    align-items: center;
    overflow-x: hidden;
    max-width: 99%;
  }
  @media (min-width: 577px) and (max-width: 767px) {
    max-width: 99%;
    /* outline: 2px solid red; */
    overflow-x: hidden;
  }
  @media (min-width: 393px) and (max-width: 576px) {
    width: 99%;
    overflow-x: hidden;
    /* outline: 2px solid red; */
  }
  @media (max-width: 392px) {
    overflow-x: hidden;
    width: 100%;
  }
`;

const PDFLinkBox = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DownloadButton = styled.button`
  /* background: #434d68; */
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px 0;
  transition: background 0.3s;

  &:hover {
    background: #434d68;
    transform: scale(1.05);
  }
`;
const LoginMessage = styled.div`
  margin: 1rem;
  padding: 1rem;
  background-color: ${(props) => props.theme.warningBackground};
  color: ${(props) => props.theme.warningText};
  border-radius: 8px;
`;
const AccordionItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* outline: 2px solid blue; */
  margin-left: 0.5rem;
  width: 96%;
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
  width: 94%;
  outline: 1px solid ${(props) => props.theme.highlight4};
  /* outline: 2px solid blue; */

  overflow: hidden;

  cursor: pointer;
  background-color: ${(props) =>
    props.isExpanded ? "#e6af68" : props.theme.secondaryBackground};
  color: ${(props) => props.theme.primaryText};
  &:hover {
    background-color: ${(props) => props.theme.tertiaryBackground};
  }

  @media (min-width: 577px) and (max-width: 920px) {
    margin-left: -0.5rem;
    flex-direction: column;
    max-width: 95%;
  }

  @media (min-width: 360px) and (max-width: 576px) {
    flex-direction: column;
    margin-left: -0.5rem;

    width: 90%;
  }
  @media (min-width: 322px) and (max-width: 359px) {
    /* outline: 2px solid black; */
    width: 84%;
    flex-wrap: wrap;
    font-size: ${({ theme }) => theme.extraSmall};
  }
  @media (max-width: 321px) {
    /* outline: 2px solid red; */
    width: 70%;
    flex-wrap: wrap;
    font-size: ${({ theme }) => theme.extraSmall};
  }
`;
const Words = styled.div`
  display: flex;
  justify-content: space-between;
  /* outline: 1px solid red; */
  width: 100%;
`;
const FrenchWord = styled.p`
  font-weight: bold;
  /* border: 1px solid grey; */

  width: 40%;
  margin-left: 0.4rem;
  font-size: ${({ theme }) => theme.medium};
  &::after {
    content: " :";
  }

  @media (min-width: 769px) and (max-width: 919px) {
    font-size: ${({ theme }) => theme.mediumSmall};
    width: 35%;
  }
  @media (min-width: 577px) and (max-width: 768px) {
    font-size: ${({ theme }) => theme.mediumSmall};
  }
  @media (max-width: 577px) {
    font-size: ${({ theme }) => theme.small};
    margin-left: 0.2rem;
    width: 49%;
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

  @media (min-width: 769px) and (max-width: 919px) {
    font-size: ${({ theme }) => theme.mediumSmall};
    width: 40%;
  }
  @media (min-width: 577px) and (max-width: 768px) {
    font-size: ${({ theme }) => theme.mediumSmall};
    width: 45%;
  }
  @media (max-width: 577px) {
    overflow-x: auto; /* Use 'auto' instead of 'scroll' */
    font-size: ${({ theme }) => theme.extraSmall};
    margin-left: 0.5rem;
    width: 48%;
    /* outline: 1px solid red; */
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
  margin-top: 0.4rem;
  gap: 1rem;
  text-align: center;
  /* border: 1px solid grey; */
  pointer-events: ${(props) => (props.isExpanded ? "none" : "auto")};
  @media (min-width: 768px) and (max-width: 1220px) {
    /* outline: 1px solid red; */
    gap: 1rem;
    /* width: 90%; */
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
const FontSizeSelect = styled.select`
  padding: 8px;
  margin: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const FontSizeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
