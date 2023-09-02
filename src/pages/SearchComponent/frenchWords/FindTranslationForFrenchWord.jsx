import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchWordsByLanguage,
  clearSearchResults,
} from "../../../redux/slices/dictionarySlice/dictionarySlice";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import SearchIcon from "../../../../public/icons/search-50.png";
import ClearIcon from "../../../../public/icons/cross-24.png";
import ListenImg from "../../../../public/icons/sound-50.png";
import useListenWord from "../../../hooks/useListenWord";
import AddToFavorites from "../../../components/Utility/AddToFavorites";
import DefinitionToggle from "../../../components/dialogues/dialogueTopics/VocabularyPage/DefinitionToggle";
import AddToFlashcards from "../../../components/Utility/AddToFlashcards";
import LanguageToggle from "../LanguageToggle";

const mapSearchResults = (searchResults, field) =>
  searchResults.map((result) => result[field]);

const FindTranslationForFrenchWord = () => {
  const { handleListen, isActiveStates } = useListenWord();
  const [isActive, setIsActive] = useState(false);
  const [showDefinition, setShowDefinition] = useState(true);

  const { t, i18n } = useTranslation();
  const isGeorgian = i18n.language === "ka";

  const dispatch = useDispatch();
  const searchResults =
    useSelector((state) => state.dictionary.searchResults) || [];
  // console.log("searchResults", searchResults);

  const french = mapSearchResults(searchResults, "french");
  const georgian = mapSearchResults(searchResults, "georgian");
  const english = mapSearchResults(searchResults, "english");
  const definition = mapSearchResults(searchResults, "definition");

  const secondLanguage = isGeorgian ? georgian : english;
  const secondLangButtonName = isGeorgian ? "Geo" : "Eng";
  const [searchQuery, setSearchQuery] = useState(""); // State to hold the search query input
  const [showAllResults, setShowAllResults] = useState(false);

  const [inputLanguage, setInputLanguage] = useState("french"); // Add inputLanguage state
  const toggleInputLanguage = () => {
    setInputLanguage((prevLanguage) =>
      prevLanguage === "french"
        ? isGeorgian
          ? "georgian"
          : "english"
        : "french"
    );
  };

  // Function to handle the search query and call the action to fetch the search results
  const handleSearch = () => {
    if (!searchQuery.trim()) {
      // If the search query is empty, reset the search results
      dispatch(fetchWordsByLanguage({ language: "", query: "" }));
    } else {
      // Conditionally set the language parameter based on inputLanguage
      const languageParam =
        inputLanguage === "french"
          ? "french"
          : isGeorgian
          ? "georgian"
          : "english";
      dispatch(
        fetchWordsByLanguage({ language: languageParam, query: searchQuery })
      );
    }
  };

  // Function to toggle showing all results or the first four results
  const handleShowAllResults = () => {
    setShowAllResults(!showAllResults);
  };

  // Function to handle clearing the search query and results
  const handleClearSearch = () => {
    setSearchQuery("");
    dispatch(fetchWordsByLanguage({ language: "", query: "" }));
    dispatch(clearSearchResults()); // Correct way to clear the search results using the action
  };

  // Function to handle Enter key press
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  const toggleDefinition = () => {
    setShowDefinition(!showDefinition);
  };
  // Filter the search results based on showAllResults flag
  const filteredResults = showAllResults
    ? searchResults
    : searchResults.slice(0, 4);

  // Display the search results in your component
  return (
    <DictionaryContainer>
      <LanguageToggle
        inputLanguage={inputLanguage}
        toggleInputLanguage={toggleInputLanguage}
        isGeorgian={isGeorgian}
        secondLanguage={secondLanguage}
      />
      <DictionaryInputContainer className={isActive ? "active" : ""}>
        <ClearSearch
          onClick={handleClearSearch}
          src={ClearIcon}
          alt="ClearIcon"
        />
        <DictionaryInput
          type="text"
          value={searchQuery}
          onFocus={() => setIsActive(true)}
          onBlur={() => setIsActive(false)}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder={
            inputLanguage === "french"
              ? isGeorgian
                ? "შეიყვანე სიტყვა..."
                : "Enter word..."
              : "Rechercher dans le dictionnaire..."
          }
        />

        <SearchImg onClick={handleSearch} src={SearchIcon} alt="SearchIcon" />
      </DictionaryInputContainer>
      {filteredResults.map((result, index) => (
        <WordCard key={result._id}>
          <FrenchWord>
            <ListenIcon onClick={handleListen(result.french)}>
              <img
                src={ListenImg}
                alt="ListenImg"
                isActive={isActiveStates[index]}
              />
            </ListenIcon>
            {inputLanguage === "french"
              ? result.french
              : isGeorgian
              ? result.georgian
              : result.english}
          </FrenchWord>
          <DefinitionToggle
            definition={definition}
            secondLanguage={
              inputLanguage === "french" ? secondLanguage : french
            }
            secondLangButtonName={secondLangButtonName}
            french={inputLanguage === "french" ? french : secondLanguage}
            index={index}
            isMultipleDefinitions={true}
          />
          <FlasCardBox>
            <AddToFlashcards
              word={
                inputLanguage === "french"
                  ? french[index]
                  : secondLanguage[index]
              }
              secondLanguage={
                inputLanguage === "french"
                  ? secondLanguage[index]
                  : french[index]
              }
              definition={definition[index]}
            />
          </FlasCardBox>
        </WordCard>
      ))}
      {searchResults.length > 4 && !showAllResults && (
        <ShowAllButton onClick={handleShowAllResults}>
          {t("Afficher tout")}
        </ShowAllButton>
      )}{" "}
      {searchQuery.trim() && !showAllResults && searchResults.length === 0 && (
        <NoResultsMessage>{t("Aucun mot trouvé")}</NoResultsMessage>
      )}
    </DictionaryContainer>
  );
};
export default FindTranslationForFrenchWord;
const DictionaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  /* border: 2px solid red; */
`;

const DictionaryInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  padding: 4px;
  height: 3rem;

  max-width: 100%;

  box-shadow: 0 2px 4px rgba(155, 161, 119, 0.637);
  border-radius: 50px;
  border: 1px solid #ccc;
  border-bottom: 2px solid grey;
  border-right: 2px solid grey;
  background-color: ${(props) => props.theme.text};

  &:hover,
  &.active {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.6);

    border-bottom: 2px solid #0a0909;
    border-right: 2px solid #0a0909;
  }
`;

const DictionaryInput = styled.input`
  margin-left: 0.5rem;
  padding: 8px;
  border: none;
  flex: 1;
  width: 100%;
  font-size: 1.2rem;
  outline: none;
  border-radius: 1rem;
`;

const SearchImg = styled.img`
  width: 2rem;
  height: 2rem;
  margin-right: 0.6rem;
  cursor: pointer;
`;

const FrenchWord = styled.p`
  display: flex;
  /* font-size: 1.4rem; */
  font-weight: bold;
  margin-right: 0.3rem;
  &:after {
    content: " ";
  }
`;
const SecondLangWord = styled.p`
  font-size: ${(props) => (props.isGeorgian ? "1rem" : "1.3rem")};
`;
const ShowAllButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0 auto;
  text-align: center;
  padding: 0.5rem 1rem;
  border-radius: 12px;
  width: 10rem;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  background: #001a1a;
  color: gold;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background: gold;
    color: #001a1a;
  }
`;
const ClearSearch = styled.img`
  background-color: transparent;
  border: none;
  width: 1.4rem;
  height: 1.4rem;
  margin-left: 0.6rem;

  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
  }
`;
const NoResultsMessage = styled.div``;
const ListenIcon = styled.div`
  display: flex;
  align-items: center;
  margin-right: 0.3rem;
  font-weight: bold;

  & > img {
    width: ${(props) => props.width || "1.2rem"};
    height: ${(props) => props.height || "1.2rem"};
    cursor: pointer;

    filter: ${(props) => (props.isActive ? "none" : "invert(-150%)")};
    transition: transform 0.3s ease-in-out;
    transform: ${(props) => (props.isActive ? "scale(1.1)" : "scale(1)")};
  }
`;
const AddToFavoritesBox = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;
///////////////
const WordCard = styled.div`
  width: 90%;
  border-bottom: 5px solid ${(props) => props.theme.primaryText};
  border-right: 5px solid ${(props) => props.theme.primaryText};
  background: ${(props) => props.theme.secondaryBackground};
  color: ${(props) => props.theme.primaryText};
  padding: 1rem;
  margin: 1rem 0.5rem;
  position: relative;
  min-height: 3.5rem;
  border-radius: 0 0 0 12px;
  max-width: 100%;
  position: relative;
`;

const FlasCardBox = styled.div`
  display: inline-block;
  position: absolute;
  bottom: 10%;
  right: 5%;
  /* border: 1px solid red; */
`;
