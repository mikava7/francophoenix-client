import React, { useState } from "react";
import styled from "styled-components";

const CategoryDropdown = ({ topic, onCategoryChange }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  // console.log("selectedCategory in dropdown", selectedCategory);
  const handleCategoryChange = (event) => {
    const newSelectedCategory = event.target.value;
    setSelectedCategory(newSelectedCategory);
    onCategoryChange(newSelectedCategory);
  };

  return (
    <CategoryDropdownContainer>
      <SelectWrapper>
        <select value={selectedCategory} onChange={handleCategoryChange}>
          {topic.map((topicName, index) => (
            <option key={index} value={topicName}>
              {topicName}
            </option>
          ))}
        </select>
      </SelectWrapper>
    </CategoryDropdownContainer>
  );
};

export default CategoryDropdown;

const CategoryDropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 2rem;
`;

const SelectWrapper = styled.div`
  position: relative;
  select {
    width: 100%;
    padding: 1rem;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: bold;
    border-bottom: 3px solid ${(props) => props.theme.flagAddon};
    appearance: none; /* Remove default arrow icon */

    background-color: ${(props) => props.theme.flagFirst};
    color: ${(props) => props.theme.flagAddon};
  }

  select::after {
    content: "\u25BC"; /* Unicode character for a downward-pointing arrow */
    position: absolute;
    top: 50%;
    right: 1rem;
    transform: translateY(-50%);
    font-size: 1rem;
    background-color: ${(props) => props.theme.flagAddon};
    color: ${(props) => props.theme.flagFirst};
  }
`;
