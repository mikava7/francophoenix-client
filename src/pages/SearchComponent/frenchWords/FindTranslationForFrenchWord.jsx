import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWordsByFrench } from "../../../redux/slices/dictionarySlice/dictionarySlice";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import SearchIcon from "../../../../public/icons/search-50.png";
import ClearIcon from "../../../../public/icons/cross-24.png";
const FindTranslationForFrenchWord = () => {
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
      <DictionaryInputContainer>
        <ClearSearch
          onClick={handleClearSearch}
          src={ClearIcon}
          alt="ClearIcon"
        />
        <DictionaryInput
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={handleKeyPress} // Add the Enter key listener
          placeholder={isGeorgian ? "შეიყვანე სიტყვა..." : "Enter word..."}
        />

        <SearchImg onClick={handleSearch} src={SearchIcon} alt="SearchIcon" />
      </DictionaryInputContainer>
      {filteredResults.map((result) => (
        <SearchResultsContainer key={result._id}>
          <FrenchWord>{result.french}</FrenchWord>
          <SecondLangWord isGeorgian={isGeorgian}>
            {" "}
            {isGeorgian ? result.georgian : result.english}
          </SecondLangWord>
          <hr />
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
  border: 2px solid red;
  height: 100vh;
  width: 100%;
`;

const DictionaryInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 5rem;
  margin-bottom: 2rem;

  padding: 4px;
  height: 3rem;
  min-width: 375px;
  width: 70%;
  box-shadow: 0 2px 4px rgba(155, 161, 119, 0.637);
  border-radius: 50px;
  border: 1px solid #ccc;
  border-bottom: 2px solid grey;
  border-right: 2px solid grey;
`;

const DictionaryInput = styled.input`
  margin-left: 0.5rem;
  padding: 8px;
  border: none;
  flex: 1;
  width: 100%;
  font-size: 1.2rem;
  outline: none;
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
  min-width: 375px;
  width: 70%;
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
const ShowAllButton = styled.button``;
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
