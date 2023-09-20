import React from "react";
import styled from "styled-components";

const Select = styled.select`
  /* Add your styling here */
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  height: 3rem;
  outline: none;
`;

const Option = styled.option`
  /* Add your styling here */
`;

const CategorySelect = ({ selectedCategory, onCategorySelect }) => {
  return (
    <Select
      onChange={(e) => onCategorySelect(e.target.value)}
      value={selectedCategory}
    >
      <Option value="">All</Option>
      <Option value="simple">Simple</Option>
      <Option value="interrogative">Interrogative</Option>
      <Option value="negative">Negative</Option>
    </Select>
  );
};

export default CategorySelect;
