import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWordsByFrench } from "../../../redux/slices/dictionarySlice/dictionarySlice";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import SearchIcon from "../../../../public/icons/search-50.png";
import ClearIcon from "../../../../public/icons/cross-24.png";
import ListenImg from "../../../../public/icons/sound-50.png";
import useListenWord from "../../../hooks/useListenWord";
import AddToFavorites from "../../../components/Utility/AddToFavorites";
const FindTranslationForFrenchWord = () => {
  const { handleListen, isActiveStates } = useListenWord();
  const [isActive, setIsActive] = useState(false);

  const { i18n } = useTranslation();
  const isGeorgian = i18n.language === "ka";
  const dispatch = useDispatch();
  const searchResults =
    useSelector((state) => state.dictionary.searchResults) || [];
  const [searchQuery, setSearchQuery] = useState(""); // State to hold the search query input
  const [showAllResults, setShowAllResults] = useState(false);
  // Function to handle the search query and call the action to fetch the search results
  const handleSearch = () => {
    if (!searchQuery.trim()) {
      // If the search query is empty, reset the search results
      dispatch(fetchWordsByFrench(""));
    } else {
      dispatch(fetchWordsByFrench(searchQuery));
    }
  };
  // Function to toggle showing all results or the first four results
  const handleShowAllResults = () => {
    setShowAllResults(!showAllResults);
  };

  // Function to handle clearing the search query and results
  const handleClearSearch = () => {
    setSearchQuery("");
    dispatch(fetchWordsByFrench("")); // Clear the search results
  };

  // Function to handle Enter key press
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  // Filter the search results based on showAllResults flag
  const filteredResults = showAllResults
    ? searchResults
    : searchResults.slice(0, 4);

  // Display the search results in your component
  return (
    <DictionaryContainer>
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
          placeholder={isGeorgian ? "შეიყვანე სიტყვა..." : "Enter word..."}
        />

        <SearchImg onClick={handleSearch} src={SearchIcon} alt="SearchIcon" />
      </DictionaryInputContainer>
      {filteredResults.map((result, index) => (
        <SearchResultsContainer key={result._id}>
          <ListenIcon onClick={handleListen(result.french)}>
            <img
              src={ListenImg}
              alt="ListenImg"
              isActive={isActiveStates[index]}
            />
          </ListenIcon>
          <FrenchWord>{result.french}</FrenchWord>
          <SecondLangWord isGeorgian={isGeorgian}>
            {" "}
            {isGeorgian ? result.georgian : result.english}
          </SecondLangWord>
          <AddToFavoritesBox>
            <AddToFavorites
              word={result.french}
              secondLanguage={isGeorgian ? result.georgian : result.english}
              frenchExamples={result.frenchExamples} // You need to make sure these properties exist in your data
              secondLanguageExamples={result.secondLanguageExamples} // You need to make sure these properties exist in your data
            />
          </AddToFavoritesBox>
        </SearchResultsContainer>
      ))}
      {searchResults.length > 4 && !showAllResults && (
        <ShowAllButton onClick={handleShowAllResults}>Show All</ShowAllButton>
      )}{" "}
      {searchQuery.trim() && searchResults.length === 0 && (
        <NoResultsMessage>No word found</NoResultsMessage>
      )}{" "}
    </DictionaryContainer>
  );
};

export default FindTranslationForFrenchWord;
const DictionaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  border: 2px solid red;
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
const SearchResultsContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  width: 300px;
  border: 2px solid grey;
  position: relative;
`;
const FrenchWord = styled.p`
  font-size: 1.4rem;
  font-weight: bold;
  margin-right: 0.3rem;
  &:after {
    content: " -";
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
