import React from "react";
import styled from "styled-components";
import RotatingChevron from "../Utility/RotatingChevron";
const CategoryDropdown = ({ topic, selectedCategory, onCategoryChange }) => {
  return (
    <CategoryDropdownContainer>
      <SelectWrapper>
        <ChevronBox>
          <RotatingChevron />
        </ChevronBox>
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
  overflow: auto;
`;

const SelectWrapper = styled.div`
  position: relative;
  max-height: inherit; /* The dropdown's max height will be determined by its parent */
`;

const StyledSelect = styled.select`
  text-align: center;
  width: 100%;
  padding: 1rem;
  cursor: pointer;
  font-size: 1.4rem;
  font-weight: bold;
  border-bottom: 5px solid ${(props) => props.theme.highlight3};
  appearance: none;
  background-color: ${(props) => props.theme.highlight4};
  color: ${(props) => props.theme.primaryBacground};
  max-height: 300px;
  overflow: hidden;
  content: "\u25BC";
  option {
    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;
  }
`;
const ChevronBox = styled.span`
  position: absolute;
  top: 20%;
  right: 10%;
`;
