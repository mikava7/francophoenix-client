import React from "react";
import styled from "styled-components";

const VerbGroupSort = ({ onFilterChange, selectedGroup, verbGroup }) => {
  const handleFilterSelect = (e) => {
    const selectedGroup = e.target.value;
    onFilterChange(selectedGroup);
  };

  return (
    <SelectContainer>
      <SelectDropdown onChange={handleFilterSelect} value={selectedGroup}>
        {verbGroup.map((group) => (
          <option key={group} value={group}>
            {group}
          </option>
        ))}
      </SelectDropdown>
    </SelectContainer>
  );
};

export default VerbGroupSort;
const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  padding: 4px;
  height: 2.5rem;
  width: 180px;
  box-shadow: 0 2px 4px rgba(155, 161, 119, 0.637);
  border: 1px solid #ccc;
  border-bottom: 2px solid grey;
  border-right: 2px solid grey;
  background-color: ${(props) => props.theme.primaryText};
  color: ${(props) => props.theme.primaryText};

  cursor: pointer;

  &:hover,
  &.active {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.6);
    border-bottom: 2px solid #0a0909;
    border-right: 2px solid #0a0909;
  }
`;

const SelectDropdown = styled.select`
  padding: 8px;
  font-size: 1.2rem;
  border: none;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.primaryText};
  color: ${(props) => props.theme.primaryBackground};
  outline: none;
  cursor: pointer;
  flex: 1;
  margin-left: 0.5rem;
  &:hover {
    background-color: ${(props) => props.theme.primaryBackground};
    color: ${(props) => props.theme.primaryText};
  }
`;
