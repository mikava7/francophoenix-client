import React, { useState } from "react";
import styled from "styled-components";

const CategoryDropdown = ({ topic, selectedCategory, onCategoryChange }) => {
  {
    console.log("selectedCategory in CategoryDropdown", selectedCategory);
  }
  return (
    <CategoryDropdownContainer>
      <SelectWrapper>
        <StyledSelect value={selectedCategory} onChange={onCategoryChange}>
          {topic.map((topicName, index) => (
            <option key={index} value={topicName}>
              {topicName}
            </option>
          ))}
        </StyledSelect>
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
`;
const StyledSelect = styled.select`
  text-align: center;
  width: 100%;
  padding: 1rem;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: bold;
  border-bottom: 3px solid ${(props) => props.theme.flagAddon};
  appearance: none;
  background-color: ${(props) => props.theme.flagFirst};
  color: ${(props) => props.theme.flagAddon};
  &::after {
    content: "\u25BC"; /* Unicode character for a downward-pointing arrow */
    position: absolute;
    top: 45%;
    right: 1rem;
    transform: translateY(-50%);
    font-size: 1.2rem;
    background-color: ${(props) => props.theme.flagAddon};
    color: ${(props) => props.theme.flagFirst};
    cursor: pointer;
  }
  option {
    cursor: pointer;
    font-size: 1.3rem;

    border-bottom: 2px solid red;
    font-weight: bold;
  }
`;
