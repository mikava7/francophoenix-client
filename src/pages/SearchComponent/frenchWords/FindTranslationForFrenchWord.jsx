import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWordsByFrench } from "../../../redux/slices/dictionarySlice/dictionarySlice";
import { useTranslation } from "react-i18next";

const FindTranslationForFrenchWord = () => {
  const { i18n } = useTranslation();
  const isGeorgian = i18n.language === "ka"; // Change 'geo' to the appropriate language code for Georgian

  const dispatch = useDispatch();
  const searchResults =
    useSelector((state) => state.dictionary.searchResults) || [];
  const [searchQuery, setSearchQuery] = useState(""); // State to hold the search query input

  // Function to handle the search query and call the action to fetch the search results
  const handleSearch = () => {
    dispatch(fetchWordsByFrench(searchQuery));
  };

  // Display the search results in your component
  return (
    <div>
      <div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Enter French word..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {searchResults.map((result) => (
        <div key={result._id}>
          <p>{result.french}</p>
          <p> {isGeorgian ? result.georgian : result.english}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default FindTranslationForFrenchWord;
